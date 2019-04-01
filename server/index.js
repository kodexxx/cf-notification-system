const amqplib = require('amqplib');
const tgBot = require('./bots/telegram.bot');


amqplib.connect()

tgBot.init();

eventBus.subscribe('notifyEvent', (data) => {
    console.log(data);

    return Promise.resolve();
});

