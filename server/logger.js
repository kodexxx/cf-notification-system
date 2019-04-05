const winston = require('winston');

const logger = new winston.createLogger({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${typeof info.message === 'string' ? info.message : JSON.stringify(info.message)}`),
    ),
    level: 'debug',
    transports: [new winston.transports.Console()],
    exitOnError: false,
});

module.exports = logger;
