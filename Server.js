const mongoose = require('mongoose');
const express = require('express');
const apiRouter = require('./Routers/apiRouter');

const app = express();

app.use('/api', apiRouter);

// new Articles({article_name: 'cutting edge', article_id:1,type:'a'}).save((err,res) => {
//     if(err) return console.log(err);
//     console.log(res);
// });

// mongoose.model('Articles').find({ article_name: /.*/i }, (err, res) => {
//   console.log(res);
// }).limit(1);

module.exports = app;
