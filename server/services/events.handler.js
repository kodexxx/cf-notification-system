const eventsProxy = require('events-proxy');
const events = require('../events');
const _ = require('lodash');

module.exports = () => {
    eventsProxy.subscribe('notifyEvent', (msg) => {
        console.log(msg);
        const { event, provider, settings, data } = msg;
        if (!_.get(events, `${event}.${provider}`)) return Promise.reject(new Error('Unsupported provider or event'));

        return events[event][provider](settings, data);
    });
};
