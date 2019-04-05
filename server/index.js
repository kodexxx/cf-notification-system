const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const eventProxy = require('events-proxy');


const ApiRouter = require('./api');
const logger = require('./logger');
const config = require('../config');
const tgBot = require('./bots/telegram.bot');
const eventHandler = require('./services/events.handler');
const errorMiddleware = require('./errors/errors.middleware');


const init = async () => {
    await eventProxy.init();
    eventHandler.init();
    tgBot.init();

    const app = express();

    app.use(cors());
    app.use(bodyParser.json());

    app.use('/api', ApiRouter);

    app.use(errorMiddleware());

    app.listen(config.port, () => {
        logger.info(`express app successfully started at ${config.port}`);
    });
};


init()
    .catch((e) => logger.error(e));



