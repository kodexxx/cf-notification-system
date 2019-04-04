const telegram = require('../bots/telegram.bot');

class TelegramProvider {
    sendNotify(providerInfo, data) {
        return telegram.sendNotify(providerInfo.uid, this._processData(data));
    }

    _processData(data) {
        return `*${data.title}*\n\n${data.message}`
    }
}

module.exports = new TelegramProvider();
