var express = require('express');
var router = express.Router();

let skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create)

router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)



module.exports = router;
