// app.controllers.js
// - responsible for handling the request, invoking the model, and sending the response
const {selectTopics, selectAll} = require('../models/app.models')


exports.getTopics = (req, res, next) => {
  selectTopics()
    .then((topics) => {

    res.status(200).send({ topics });
  })
  .catch((err) =>{
   console.log(err,'err inside controllers')
    next(err);
  })
};
// // exports.getAll = (req,res, next) => {
//   selectAll()
//     .then((endpoints) => {
//       res.status(200).send({endpoints})
//     })
// }