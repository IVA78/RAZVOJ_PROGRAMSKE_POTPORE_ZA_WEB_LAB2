// stvaranje kosarice
function createNewCart(req) {

   let newCart = {};

   //inicijalizinje pocetnih vrijednosti kosarice
   newCart.totalAmount = 0;
   newCart.items = {};
 
   return newCart;
 }
 
 
 // dodaj jedan ili više komada nekog artikla u kosarici
 async function addItemToCart(req, id, quantity) {
   //dohvati kosaricu
   let cart = req.session.cart;
 
   // dohvati zapis proizvoda u kosarici
   let productToDelete = cart.items[id];
 
   // ako se proizvod vec ne nalazi u kosarici, stvori njegovu instancu
   if (productToDelete === undefined) {
     productToDelete = { id: id, name: undefined, quantity: 0, imageurl: undefined };
     cart.items[id] = productToDelete;
   }
 
   // dohvati ime, cijenu i sliku proizvoda
   if (productToDelete.price === undefined) {
     if (itemData = await getItemData(id)) {
       productToDelete.name = itemData.name;
       productToDelete.imageurl = itemData.image;
     }
   }
 
   // azuriraj kolicinu proizvoda
   productToDelete.quantity = productToDelete.quantity + quantity;
 
   // azuriraj sumu proizvoda u kosarici
   cart.totalAmount = 0;
   for (let item of Object.values(cart.items)) {
     cart.totalAmount +=  item.quantity;
   }
 }
 
 // uklanjanje proizvoda iz kosarice
 async function removeItemFromCart(req, id, quantity) {
   //dohvati kosaricu
   let cart = req.session.cart;
 
   // dohvati proizvod iz kosarice
   let productToDelete = cart.items[id];
 
   // ako artikl postoji u košarici
   if (productToDelete) {
     // smanji kolicinu proizvoda
     let newQuantity = Math.max(0, productToDelete.quantity - quantity);
 
     // ako je nova brojnost nula, izbaci ga iz košarice - refresh za uklanjanje prikaza 
     if (newQuantity)
       productToDelete.quantity = newQuantity;
     else
       delete cart.items[id];
   }
 
   // ažuriraj ukupnu cijenu košarice
   cart.totalAmount = 0;
   for (let item of Object.values(cart.items)) {
     cart.totalAmount +=  item.quantity;
   }
 }
 
 // Uvoz podataka o proizvodima
 const data = require('../data/mydata'); 

 // dohvati podatke o proizvodu
 async function getItemData(id) {
   for (const category of data.categories) {
     for (const product of category.products) {
       if (product.name === id) {
         // Pronađen je proizvod s odgovarajućim ID-om
         return {
           name: product.name,
           image: product.image
         };
       }
     }
   }
 
   return null;
 }
 
 module.exports = {
   createNewCart: createNewCart,
   addItemToCart: addItemToCart,
   removeItemFromCart: removeItemFromCart, 
 };
 

 
 