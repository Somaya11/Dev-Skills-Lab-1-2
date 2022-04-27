const res = require('express/lib/response');
let skillsDB = require('../models/skill')
module.exports = {
    index: index,
    show: show,
    new: newSkill,
    create
};

function index(req, res, next) {
    res.render('skills/index', {skills: skillsDB.getAll(), 
        time: req.time });
  }

  function show(req, res) {
      console.log(req.params)
      
      let skill = skillsDB.getOne(req.params.id)
      console.log(skill)
      res.render('skills/show', {skill: skill})
  }

  function newSkill(req, res) {
      res.render('skills/new')
  }
  function create(req, res){
      console.log(req.body)
res.redirect('/skills')
  }