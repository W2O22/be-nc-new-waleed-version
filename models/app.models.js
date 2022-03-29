
// app.models.js
// - responsible for interacting with the data and sending data back to the controller (in this case using the callback parameter)
const db = require('../db/connection')
exports.selectTopics = () => {
   const text = 'SELECT * FROM topics;';
   return db
    .query(text)
    .then((result) => result.rows);
  };
  

  exports.selectArticleById = (article_id) => {
    const query = 'SELECT * FROM articles WHERE article_id = $1'
    return db.query(query,[article_id]).then((article) => article.rows[0]);
  };