const express = require('express');
const apiRouter = express.Router();
const products = require('../products.json');

apiRouter.get('/', (req, res) => {
    const { title, page = 1, perPage = 10 } = req.query;
    const startIndex = (parseInt(page) -1) * parseInt(perPage);
    let productsToReturn = products;
    if (title) {
        productsToReturn = products
        .filter((p) => p.title.toLowerCase().includes(title.toLowerCase()))
        .sort((a, b) => {
            a = a.title.toLowerCase();
            b = b.title.toLowerCase();
            var an = a.indexOf(title.toLowerCase());
            var bn = b.indexOf(title.toLowerCase());
            if(an === bn)
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
            else
            return  an > bn ? 1 : -1;
        });
    }
    const productsBulk = productsToReturn.slice(startIndex, startIndex + parseInt(perPage));
    res.json({
        data: productsBulk,
        totalCount: productsToReturn.length
    });
});
apiRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id.toString() === id);
    res.json({
        data: product
    });
});

module.exports = apiRouter;