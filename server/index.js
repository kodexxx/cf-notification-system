const eventProxy = require('events-proxy');
const express = require('express');
const config = require('../config');

const tgBot = require('./bots/telegram.bot');

const providers = require('./providers');

const init = async () => {
    await eventProxy.init();
    tgBot.init();

    eventProxy.subscribe('notifyEvent', (data) => {
        console.log(data);

        providers.slack.sendNotify({
            url: 'https://hooks.slack.com/services/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',
        }, 'Pipeline failed', JSON.stringify(data));

        providers.telegram.sendNotify({
            uid: 42451962,
        }, 'Pipeline failed', JSON.stringify(data));

        return Promise.resolve();
    });

    // eventProxy.publish('notifyEvent', 'asdsa');

    const app = express();


    app.listen(config.port, () => {
        console.log(`express app successfully started at ${config.port}`);
    });
};


init()
    .catch(console.error);



