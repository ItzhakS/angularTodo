const router = require('express').Router();
const Models = require('./models');
// const Family = Models.family;
// const Task = Models.task;



router.get('/family', (req,res)=>{
  Models.family.find()
    .then(docs => { console.log(docs), res.send(docs) })
    .catch(err => {
    console.log('Error in finding employees ' + JSON.stringify(err));
    res.send(JSON.stringify(err));
    });

})
router.get('/tasks', (req,res)=>{
  Models.tasks.find()
    .then(docs => { console.log(docs), res.send(docs) })
    .catch(err => {
    console.log('Error in finding employees ' + JSON.stringify(err));
    res.send(JSON.stringify(err));
    });

})
router.post('/task', (req,res)=>{
  let task = new  Models.tasks(req.body);
  task.save()
  // Models.tasks.create(req.body)
    .then(docs => { console.log(docs), res.send(docs) })
    .catch(err => { console.log(err), res.send('Error! ',JSON.stringify(err)) });

})

module.exports = router;
