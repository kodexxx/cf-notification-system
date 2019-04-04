const eventProxy = require('events-proxy');
const express = require('express');

const config = require('../config');
const dbConnection = require('./mongo.connection');
const tgBot = require('./bots/telegram.bot');
const providers = require('./providers');
const ApiRouter = require('./api');
const errorMiddleware = require('./errors/errors.middleware');
const cors = require('cors');
const bodyParser = require('body-parser');

const init = async () => {
    await eventProxy.init();
    tgBot.init();

    dbConnection(() => {
        console.log('mongo ready');
    });

    eventProxy.subscribe('notifyEvent', (data) => {
        const { provider, notifyData } = data;

        if (!providers.hasOwnProperty(provider.id)) {
            return Promise.resolve();
        }

        return providers[provider.id].sendNotify(provider.data, notifyData);
    });

    const app = express();

    app.use(cors());
    app.use(bodyParser.json());

    app.use('/api', ApiRouter);

    app.use(errorMiddleware());

    app.listen(config.port, () => {
        console.log(`express app successfully started at ${config.port}`);
    });
};


init()
    .catch(console.error);



