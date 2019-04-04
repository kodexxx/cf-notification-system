const _ = require('lodash');

class NotificationHelper {
    markdownTgGenerateList(obj) {
        return _.chain(obj)
            .map((val, key) => ({ val, key }))
            .reduce(({ val, key }) => `*${key}*: ${val}\n`);
    }
}

module.exports = new NotificationHelper();
