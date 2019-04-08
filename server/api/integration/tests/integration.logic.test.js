describe('integration logic', () => {
    const integrationLogic = jest.requireActual('../integration.logic');
    jest.mock('../../../events', () => ({
        event1: {
            provider1: 'value1',
            provider2: 'value1',
        },
        event2: {
            provider1: 'value1',
            provider2: 'value1',
        },
    }));
    it('getSupportedEvents', (done) => {
        const r = integrationLogic.getSupportedEvents();
        expect(r).toEqual({
            events: ['event1', 'event2'],
            providers: {
                provider1: ['event1', 'event2'],
                provider2: ['event1', 'event2'],
            },
        });
        done();
    });
});
