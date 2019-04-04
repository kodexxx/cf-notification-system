const axios = require('axios');

class SlackProvider {

    constructor() {
        this.sendNotify = this.sendNotify.bind(this);
    }

    sendNotify(providerInfo, data) {
        return axios({
            method: 'post',
            url: providerInfo.url,
            data: {
                type: 'mrkdwn',
                text: this._processData(data),
            },
        });
    }

    _processData(data) {
        return `*${data.title}*\n\n${data.message}`;
    }
}

module.exports = new SlackProvider();
