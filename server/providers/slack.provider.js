const axios = require('axios');

class SlackProvider {

    constructor() {
        this.sendNotify = this.sendNotify.bind(this);
    }

    sendNotify(data, message) {
        return axios({
            method: 'post',
            url: data.webhookUri,
            data: {
                type: 'mrkdwn',
                text: message,
            },
        });
    }
}

module.exports = new SlackProvider();
