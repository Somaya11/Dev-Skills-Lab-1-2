var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Developer skills' });
});

router.get('/', function(req, res){
  res.redirect('/skills')
})

module.exports = router;
