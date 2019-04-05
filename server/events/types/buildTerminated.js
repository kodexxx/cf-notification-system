const providers = require('../../providers');
const helper = require('./helpers');

module.exports = {
    telegram(settings, data) {
        const text = `*Build terminated*\n\n${helper.markdownTgGenerateList(data)}`;
        return providers.telegram.sendNotify(settings, text);
    },
    slack(settings, data) {
        const text = `*Build terminated*\n\n${helper.markdownTgGenerateList(data)}`;
        return providers.slack.sendNotify(settings, text);
    },
    twilio(settings, data) {
        const text = `Build terminated\n\n${helper.formatObjectText(data)}`;
        return providers.twilio.sendNotify(settings, text);
    },
};
