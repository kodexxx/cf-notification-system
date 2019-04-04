const integrationLogic = require('./integration.logic');

class IntegrationController {
    getSupportedEvents(req, res, next) {
        try {
            res.json(integrationLogic.getSupportedEvents());
        }
        catch (e) {
            next(e);
        }

    }
}


module.exports = new IntegrationController();
