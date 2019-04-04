const eventsProxy = require('events-proxy');

eventsProxy.init().then(() => {
    eventsProxy.publish('notifyEvent', {
        event: 'buildFailed',
        provider: 'telegram',
        settings: {
            uid: '42451962',
        },
        data: {
            cauz: 'hz',
            nahuya: 'hz',
        },
    });
});
