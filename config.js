module.exports = {
    rabbitUrl: process.env.RABBITMQ_URI || 'amqp://localhost',
    port: process.env.PORT || 3000,
    telegramToken: process.env.TELEGRAM_TOKEN,
};
