const router = require('express').Router();
const integrationController = require('./integration.controller');

router.get('/', integrationController.getSupportedEvents);

module.exports = router;
