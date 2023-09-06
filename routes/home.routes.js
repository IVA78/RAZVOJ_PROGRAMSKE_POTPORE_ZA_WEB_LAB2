const express = require('express');
const router = express.Router();
const data = require('../data/mydata');

//prikaz glavne stranice
router.get('/', function(req, res, next) {
    res.render('home');
   
});

//ruta za dohvat kategorija
router.get('/getCategories', function(req, res, next) {
    res.json(data.categories);
});

//ruta za dohvat proizvoda odredjene kategorije
router.get('/getProducts/:id', function(req, res, next) {
  // Dohvaćanje ID-a kategorije iz URL parametra
  const categoryId = req.params.id; 
  
  // Pronalaženje kategorije na temelju ID-a
  const category = data.categories.find(category => category.name === categoryId);
 
  //ako je pronadjena kategorija, vrati njene proizvode
  if (category) {
    const products = category.products;
    res.json(products);
  } else {
    res.status(404).json({ error: 'Kategorija nije pronađena.' });
  }
});

  


module.exports = router;
