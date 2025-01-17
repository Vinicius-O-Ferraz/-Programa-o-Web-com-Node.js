var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', { exibirDiv: true });//ou false, você escolhe
})

// req -> informação do header e body
// res -> objeto para mandar uma resposta ao visitante
// next -> repassa a requisição para ser manipulada por outra função

module.exports = router;
