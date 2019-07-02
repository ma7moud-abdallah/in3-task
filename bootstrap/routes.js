const express = require('express');
const Products = require('../routes/products')
const categories = require('../routes/categories')
const error = require('../middleware/error');
const path  = require('path')

module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/products', Products)
    app.use('/categories', categories)
    app.use(error);
}