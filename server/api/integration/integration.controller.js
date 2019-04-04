const integrationLogic = require('./integration.logic');
const { BadRequestError } = require('../../errors');

class IntegrationController {
    async addIntegrationToUser(req, res, next) {
        const { integrationType, userId, settings } = req.body;

        if (!integrationType) {
            return next(new BadRequestError('Provide please, integrationType variable in body'));
        }

        if (!userId) {
            return next(new BadRequestError('Provide please, userId variable in body'));
        }

        if (!settings) {
            return next(new BadRequestError('Provide please, settings variable in body'));
        }

        try {
            const result = await  integrationLogic.addIntegrationToUser(userId, integrationType, settings);

            res.json(result);
        } catch (e) {
            next(e);
        }
    }

    async list(req, res, next) {
        const { userId } = req.query;

        if (!userId) {
            return next(new BadRequestError('Provide please, userId variable in query'));
        }

        try {
            const result = await integrationLogic.list(userId);

            res.json(result);
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new IntegrationController();
