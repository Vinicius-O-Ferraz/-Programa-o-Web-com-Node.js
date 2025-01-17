var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', { exibirDiv: true });//ou false, você escolhe
  })

module.exports = router;
