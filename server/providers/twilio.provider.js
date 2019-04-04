const twilio = require('twilio');
const config = require('../../config');

class TwilioProvider {
    constructor() {
        this.client = twilio(config.twilio.sid, config.twilio.token);
    }

    sendNotify(providerInfo, data) {
        try {
            return this.client.messages.create({
                from: config.twilio.from,
                body: this._processData(data),
                to: providerInfo.phone,
            });
        } catch (e) {
            return Promise.reject(e);
        }
    }

    _processData(data) {
        return `${data.title}\n\n${data.message}`;
    }
}


module.exports = new TwilioProvider();
