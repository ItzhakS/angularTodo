const mongoose = require('mongoose');

let Family = mongoose.model('family' , {
  id:{type:Number},
  name: { type: String},
  nickname: { type : String},
  title: {type : String}
}, 'family')
let Tasks = mongoose.model('tasks' , {
  id:{type:Number},
  task: { type: String},
  dateCreated: { type : Date},
  assignee: {type : Number}
})

module.exports = {
  family : Family,
  tasks : Tasks
};