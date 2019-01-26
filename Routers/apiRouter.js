const apiRouter = require('express').Router();
const articlesRouter = require('./articlesRouter');

apiRouter.get('/', (req, res) => {
  res.send({ hi: 'jello' });
});

apiRouter.use('/articles', articlesRouter);

module.exports = apiRouter;
