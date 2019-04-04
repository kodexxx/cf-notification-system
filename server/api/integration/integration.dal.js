const IntegrationModel = require('./integration.model');
const { ObjectId } = require('mongoose').Types;

class IntegrationDal {
    addIntegrationToUser(userId, integrationType, settings) {
        const integration = new IntegrationModel({
            integrationType,
            settings,
            userId: ObjectId(userId),
        });

        return integration.save();
    }

    update(integrationId, settings) {
        return IntegrationModel.updateOne({
            _id: ObjectId(integrationId),
            settings,
        });
    }

    list(userId) {
        return IntegrationModel.find({
            userId: ObjectId(userId),
        });
    }
}

module.exports = new IntegrationDal();
