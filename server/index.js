const amqplib = require('amqplib');
const tgBot = require('./bots/telegram.bot');


amqplib.connect()

tgBot.init();
