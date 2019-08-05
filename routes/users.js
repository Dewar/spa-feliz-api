var express = require('express');
var router = express.Router();

router.get('/', function(_, response, _) {
  response.send('');
});

module.exports = router;