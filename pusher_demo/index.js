const eventsProxy = require('events-proxy');

eventsProxy.init().then(() => {
    eventsProxy.publish('notifyEvent', {
        event: 'buildSuccess',
        provider: 'telegram',
        settings: {
            uid: '42451962',
        },
        data: {
            'Zalupa': 'kanesh',
        },
    });
});
