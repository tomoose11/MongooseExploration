const mongoose = require('mongoose');

const dbconfig = require('../Config/dbconfig');

const { articlesSchema } = require('../Schemas/Schemas');

mongoose.connect(dbconfig);

exports.getArticles = (req, res, next) => {
  mongoose.model('Articles', articlesSchema).find({ article_name: /.*/i }, (err, result) => {
    res.send(result[0]);
  }).limit(1);
};
