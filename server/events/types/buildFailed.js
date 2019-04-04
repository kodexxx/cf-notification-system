const providers = require('../../providers');
const helper = require('./helpers');

const FAIL_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Fail_stamp.jpg';

module.exports = {
    telegram(settings, data) {
        const text = `*Build successfully finished*\n\n${helper.markdownTgGenerateList(data)}`;
        return providers.telegram.sendWithImageNotify(settings, FAIL_IMAGE, text);
    },
    slack(settings, data) {
        return providers.slack.sendNotify(settings, helper.markdownTgGenerateList(data));
    },
};
