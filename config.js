module.exports = {
    port: process.env.PORT || 3000,
    telegramToken: process.env.TELEGRAM_TOKEN,
    twilio: {
        sid: process.env.TWILIO_SID,
        token: process.env.TWILIO_TOKEN,
        from: process.env.TWILIO_FROM,
    },
    mongo: {
        uri: process.env.MONGO_URI || 'mongodb://127.0.0.1/notification',
    },
};
