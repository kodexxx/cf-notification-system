const TelegramBot = require('node-telegram-bot-api');
const config = require('../../config');

class Telegram {
    constructor() {
        this._bot = null;

        this.init = this.init.bind(this);
    }

    get bot() {
        return this._bot;
    }

    init() {
        this._bot = new TelegramBot(config.telegramToken, {
            polling: true,
        });

        this._initCommands();
    }

    _initCommands() {
        this._bot.onText(/\/start/, (msg) => {
            //processing link for tie telegram with codefresh account
            this._bot.sendMessage(msg.chat.id, msg.chat.id, {
                parse_mode: 'Markdown',
                reply_markup: {
                    keyboard: [
                        [
                            {
                                text: 'Tie telegram',
                            },
                        ],
                    ],
                },
            });
        });
    }
}


module.exports = new Telegram();
