const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(9090, ()=>{
  console.log('Listening 9090...');
})

mongoose.connect('mongodb://localhost/houseTasks', { useNewUrlParser: true })
.then(()=>{
  console.log('Database Connected...');
}).catch(()=>{
  console.log('Database Did Not Connect...');

});