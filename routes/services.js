var express = require('express');
var router = express.Router();
var servicesController = require('../controllers/services.controller');

router.get('/', servicesController.services_find_all);
router.get('/:id', servicesController.services_find_detail);

module.exports = router;