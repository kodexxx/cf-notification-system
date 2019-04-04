const providers = require('../../providers');
const helper = require('./helpers');

const SUCCESS_IMAGE = "https://www.success.com/wp-content/uploads/2018/05/success.jpg";

module.exports = {
    telegram(settings, data) {
        const text = `*Build successfully finished*\n${helper.markdownTgGenerateList(data)}`;
        return providers.telegram.sendWithImageNotify(settings, SUCCESS_IMAGE, text);
    },
};
