const axios = require('axios');

class SlackProvider {
    sendNotify(providerInfo, title, body) {
        return axios({
            method: 'post',
            url: providerInfo.url,
            data: {
                type: 'mrkdwn',
                text: `*${title}*\n\n${body}`,
            },
        });
    }
}

module.exports = new SlackProvider();
