const mongoose = require('mongoose');

const { Schema } = mongoose;

const articlesSchema = new Schema({
  article_name: String,
  article_id: Number,
  name: String,
  type: String,
  comment: String,
});

module.exports = { articlesSchema };
