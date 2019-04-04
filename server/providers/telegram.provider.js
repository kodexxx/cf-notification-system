const telegram = require('../bots/telegram.bot');

class TelegramProvider {
    sendNotify(data, message) {
        return telegram.sendNotify(data.uid, message);
    }

    sendWithImageNotify(data, imageUri, message) {
        return telegram.sendWithImageNotify(data.uid, imageUri, message);
    }
}

module.exports = new TelegramProvider();
