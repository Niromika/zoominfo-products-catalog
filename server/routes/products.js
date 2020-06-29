const express = require('express');
const apiRouter = express.Router();
const products = require('../products.json');

apiRouter.get('/', (req, res) => {
    const { title, page = 1, perPage = 10 } = req.query;
    const startIndex = (parseInt(page) -1) * parseInt(perPage);
    let productsToReturn = products;
    const hasMore = productsToReturn.length - page * perPage > 0;

    if (title) {
        productsToReturn = products
        .filter((p) => p.title.toLowerCase().includes(title.toLowerCase()));
        // .sort((a, b) => {
        //     a = a.title.toLowerCase();
        //     b = b.title.toLowerCase();
        //     var an = a.indexOf(title.toLowerCase());
        //     var bn = b.indexOf(title.toLowerCase());
        //     if(an === bn)
        //     return (a > b) ? 1 : ((b > a) ? -1 : 0);
        //     else
        //     return  an > bn ? 1 : -1;
        // });
    }
    const productsBulk = productsToReturn.slice(startIndex, startIndex + parseInt(perPage));
    res.json({
        data: productsBulk,
        hasMore
    });
});

module.exports = apiRouter;