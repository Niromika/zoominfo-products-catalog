const express = require('express');
const apiRouter = express.Router();
const products = require('../products.json');

apiRouter.get('/', (req, res) => {
    const { title, page = 1, perPage = 10 } = req.query;
    const startIndex = (parseInt(page) -1) * parseInt(perPage);
    let productsToReturn = products;
    
    if (title) {
        productsToReturn = products.filter((p) => p.title.toLowerCase().includes(title.toLowerCase()));
    }
    const hasMore = productsToReturn.length - page * perPage > 0;
    const productsBulk = productsToReturn.slice(startIndex, startIndex + parseInt(perPage));
    res.json({
        data: productsBulk,
        hasMore
    });
});

module.exports = apiRouter;