const skills = [
    {id: 125223, skill: 'Problem Solving', done: true},
    {id: 127904, skill: 'Team Work', done: false},
    {id: 139608, skill: 'Program Language', done: false}
  ];
  
  module.exports = {
    getAll: getAll,
    getOne,
    create
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
  }

function create(data) {
data.id = Date.now() % 1000000
data.done = false
skills.push(data)
}