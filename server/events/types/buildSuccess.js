const providers = require('../../providers');
const helper = require('./helpers');

const SUCCESS_IMAGE = 'https://www.success.com/wp-content/uploads/2018/05/success.jpg';

module.exports = {
    telegram(settings, data) {
        const text = `*Build successfully finished*\n\n${helper.markdownTgGenerateList(data)}`;
        return providers.telegram.sendWithImageNotify(settings, SUCCESS_IMAGE, text);
    },
    slack(settings, data) {
        const text = `*Build successfully finished*\n\n${helper.markdownTgGenerateList(data)}`;
        return providers.slack.sendNotify(settings, text);
    },
    twilio(settings, data) {
        const text = `*Build successfully finished*\n\n${helper.formatObjectText(data)}`;
        return providers.twilio.sendNotify(settings, text);
    },
};
