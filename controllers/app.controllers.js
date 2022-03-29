// app.controllers.js
// - responsible for handling the request, invoking the model, and sending the response
const {selectTopics, selectArticleById} = require('../models/app.models')


exports.getTopics = (req, res, next) => {
  selectTopics()
    .then((topics) => {

    res.status(200).send({ topics });
  })
  .catch((err) =>{
    next(err);
  })
};

exports.getArticleById = (req, res, next) => {
  const {article_id} = req.params;
  console.log(article_id,'<<<article_id');
  selectArticleById(article_id)
    .then((article)=>{
      res.status(200).send({article});
    })
    .catch((err)=>{
      next(err);
    })
}