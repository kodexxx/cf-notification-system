const telegram = require('./telegram.provider');
const slack = require('./slack.provider');
const twilio = require('./twilio.provider');

module.exports = {
    telegram,
    slack,
    twilio,
};
