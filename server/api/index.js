const router = require('express').Router();

const IntegrationRouter = require('./integration');
const UserRouter = require('./user');

router.use('/user', UserRouter);
router.use('/integration', IntegrationRouter);

module.exports = router;
