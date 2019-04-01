const telegram = require('../bots/telegram.bot');

class TelegramProvider {
    sendNotify(providerInfo, title, body) {
        return telegram.sendNotify(providerInfo.uid, title, body);
    }
}

module.exports = new TelegramProvider();
