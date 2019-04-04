const router = require('express').Router();

const IntegrationRouter = require('./integration');

router.use('/integration', IntegrationRouter);

module.exports = router;
