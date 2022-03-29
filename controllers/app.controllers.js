// app.controllers.js
// - responsible for handling the request, invoking the model, and sending the response
const {selectTopics} = require('../models/app.models')


exports.getTopics = (req, res, next) => {
  selectTopics()
    .then((topics) => {
      
    res.status(200).send({ topics });
  })
  .catch((err) =>{
    next(err);
  })
};
