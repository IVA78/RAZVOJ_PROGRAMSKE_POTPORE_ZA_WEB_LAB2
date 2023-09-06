var express = require('express');
var router = express.Router();
const cart = require('../models/CartModel');

//prikaz kosarice
router.get('/', function(req, res, next) {
    res.render('cart', {
        title: 'Cart'
    });
});

//ruta za dodavanje proizvoda u kosaricu
router.get('/add/:id', async function (req, res, next) {
    await cart.addItemToCart(req, req.params.id, 1);
    res.end();
});
  
//ruta za uklanjanje proizvoda iz kosarice
router.get('/remove/:id', async function (req, res, next) {
    await cart.removeItemFromCart(req, req.params.id, 1);
    res.end();
});

//ruta za dohvacanje podatka o kolicini proizvoda iz kosarice
router.get('/quantity/:productId', (req, res) => {
    const cart = req.session.cart;
    const itemObject = cart.items[req.params.productId];
    const quantity = itemObject ? itemObject.quantity : 0;
    res.json(quantity);
});

//ruta za dohvacanje ukupne kolicine proizvoda u kosarici
router.get('/totalAmount', (req, res) => {
    const cart = req.session.cart;
    const totalAmount = cart.totalAmount;
    res.json(totalAmount);
});

//ruta za dohvacanje svih proizvoda koji su dodani u kosaricu
router.get('/getAll', (req, res) => {
    const cart = req.session.cart;
    const items = cart.items;
    res.json(items);

});

//ruta za povratak na glavnu stranicu iz kosarice
router.get('/home', function(req, res, next) {
    console.log("dohvacam!");
    res.render('home', {
        title: 'Home'
    });
});

 
module.exports = router;

