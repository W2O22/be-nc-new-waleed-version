// app.js
// - my server
const express = require('express');
const {getTopics, getArticleById} = require('./controllers/app.controllers')

const app = express();
app.use(express.json());

app.get('/api/topics', getTopics);

app.get('/api/articles/:article_id',getArticleById);

app.use((req, res, next)=>{
res.status(404).send({msg: 'path not found'});
});


app.use((err, req, res, next) => {
    console.log('inside handleCustomErrors 1')
    if (err.status === 404) res.status(err.status).send({msg: 'path not found'})
    if (err.status && err.msg) {
      res.status(err.status).send({ msg: err.msg });
    } else next(err);
  });

app.use((err, req, res, next) => {
    console.log('inside handleCustomErrors 2')
    if (err.code === '22P02') {
      res.status(400).send({ msg: 'Invalid input' });
    } else {
        console.log(err, '<<inside handlePsqlErrors');
        next(err);
    }
  });
app.use((err, req, res, next) => {
    console.log('inside handleCustomErrors 3')
    console.log(err);
    
    res.status(500).send({ msg: 'Internal Server Error' });
  });
module.exports = app;