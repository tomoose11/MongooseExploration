const articlesRouter = require('express').Router();
const { getArticles } = require('../Controllers/articlesController');

articlesRouter.get('/', getArticles);

module.exports = articlesRouter;
