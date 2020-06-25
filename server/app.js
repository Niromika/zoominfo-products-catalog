const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const productsRouter = require('./routes/products');

app.use(cors());
app.use('/images', express.static('./images'));
app.use('/api/products', productsRouter);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))