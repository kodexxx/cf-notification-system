const integrationController = require('./integration.controller');

const router = require('express').Router();


router.route('/')
    .post(integrationController.addIntegrationToUser)
    .get(integrationController.list);

module.exports = router;
