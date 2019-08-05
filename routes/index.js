var express = require('express');
var router = express.Router();

router.get('/', function (_, response, _) {
    response.render('index', { title: 'Express' });
});

module.exports = router;