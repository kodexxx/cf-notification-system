const TelegramBot = require('node-telegram-bot-api');
const config = require('../../config');

class Telegram {
    constructor() {
        this._bot = null;

        this.init = this.init.bind(this);
    }

    init() {
        this._bot = new TelegramBot(config.telegramToken, {
            polling: true,
        });

        this._initCommands();
    }

    sendNotify(uid, title, text) {
        return this._bot.sendMessage(uid, `*${title}*\n\n${text}`, {
            parse_mode: 'Markdown',
        });
    }

    _initCommands() {
        this._bot.onText(/\/start/, (msg) => {

            //processing link for tie telegram with codefresh account

            this._bot.sendMessage(msg.chat.id, msg.chat.id, {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Tie telegram',
                                url: 'https://example.com/callback',
                            },
                        ],
                    ],
                },
            });
        });
    }
}


module.exports = new Telegram();
