const { telegram, slack, twilio } = require('../../providers');

module.exports = {
    telegram(settings, message) {
        return telegram.sendNotify(settings, message);
    },

    slack(settings, message) {
        return slack.sendNotify(settings, message);
    },

    twilio(settings, message) {
        return twilio.sendNotify(settings, message);
    },
};
