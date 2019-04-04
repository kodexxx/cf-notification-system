const providers = require('../../providers');
const helper = require('./helpers');

const FAIL_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Fail_stamp.jpg';

module.exports = {
    telegram(settings, data) {
        return providers.telegram.sendWithImageNotify(settings, FAIL_IMAGE, helper.markdownTgGenerateList(data));
    },
    slack(settings, data) {
        return providers.slack.sendNotify(settings, helper.markdownTgGenerateList(data));
    },
};
