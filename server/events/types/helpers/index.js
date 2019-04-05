const _ = require('lodash');

class NotificationHelper {
    markdownTgGenerateList(obj) {
        return _.chain(obj)
            .map((val, key) => ({ val, key }))
            .reduce((accum, { val, key }) => accum.concat(`*${key}*: ${val}\n`), '')
            .value();
    }

    formatObjectText(obj) {
        return _.chain(obj)
            .map((val, key) => ({ val, key }))
            .reduce((accum, { val, key }) => accum.concat(`${key}: ${val}\n`), '')
            .value();
    }
}

module.exports = new NotificationHelper();
