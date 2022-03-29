
// app.models.js
// - responsible for interacting with the data and sending data back to the controller (in this case using the callback parameter)
const db = require('../db/connection')
exports.selectTopics = () => {
   const text = 'SELECT * FROM topics;';
   return db
    .query(text)
    .then((result) => result.rows);
  };
  // exports.selectAA = () => {

  // }