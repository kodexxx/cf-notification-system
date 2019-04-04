const integrationDal = require('./integration.dal');

class IntegrationLogic {
    addIntegrationToUser(userId, integrationType, settings) {
        return integrationDal.addIntegrationToUser(userId, integrationType, settings);
    }

    list(userId) {
        return integrationDal.list(userId);
    }
}

module.exports = new IntegrationLogic();
