const events = require('../../events');
const _ = require('lodash');


class IntegrationLogic {
    getSupportedEvents() {
        return _.chain(events)
            .map((provider, eventName) => ({
                eventTypes: _.keys(provider),
                eventName,
            }))
            .reduce((accum, { eventTypes, eventName }) => [
                ...accum,
                ...eventTypes.map(type => ({ type, eventName })),
            ], [])
            .reduce((accum, { type, eventName }) => ({
                ...accum,
                [type]: (accum[type] || []).concat(eventName),
            }), {})
            .value();
    }
}

module.exports = new IntegrationLogic();
