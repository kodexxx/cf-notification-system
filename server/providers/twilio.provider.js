const twilio = require('twilio');
const config = require('../../config');

class TwilioProvider {
    constructor() {
        this.client = twilio(config.twilio.sid, config.twilio.token);
    }

    sendNotify(data, message) {
        try {
            return this.client.messages.create({
                from: config.twilio.from,
                body: message,
                to: data.phone,
            });
        } catch (e) {
            return Promise.reject(e);
        }
    }
}


module.exports = new TwilioProvider();
