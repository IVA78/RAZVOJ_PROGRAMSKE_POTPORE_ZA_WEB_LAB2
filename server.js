const express = require('express');
const app = express();
const ejs = require('ejs');
var path = require('path');
const mime = require('mime');
const session = require('express-session');

app.use(express.json());

const homeRouter = require('./routes/home.routes');
const cartRouter = require('./routes/cart.routes');

//generiranje html-a
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//prikazivanje statickog sadrzaja
app.use(express.static(path.join(__dirname, 'public')));
//JS - MIME - nuzno sa skripte u home.ejs i cart.ejs
app.use('/public/scripts', express.static(__dirname + '/public/scripts', {
   setHeaders: function(res, path) {
     if (path.endsWith('.js')) {
       res.setHeader('Content-Type', 'application/javascript');
     }
   }
 }));
 

app.use(express.urlencoded({ extended: true }));

/**
 maxAge - trajanje sesije u milisekundama (5 minuta)
 rolling - omogućava ponovno postavljanje vremena isteka sesije svaki put 
            kada se korisnik interagira s aplikacijom, produžavajući 
            vrijeme trajanja sesije
         -  Kada korisnik ne interagira s aplikacijom unutar postavljenog vremena,
             sesija će isteći, a svi podaci u košarici bit će automatski obrisani.

 */
app.use(session({
  secret: "web-lab2",
  resave: false,
  saveUninitialized: true,
  rolling: true, // Omogućava ponovno postavljanje vremena isteka sesije
  cookie: {
    maxAge: 300000 
  }
}));

const cart = require('./models/CartModel');

//kreiranje kosarice
app.use((req, res, next) => {
    if (req.session.cart === undefined || req.session.cart.invalid) {
        req.session.cart = cart.createNewCart(req);
    }
    next();
})

// direktno pokretanje home stranice: localhost:8080
app.use('/', homeRouter);
//direktno pokretanje cart stranice: localhost:8080/cart
app.use('/cart', cartRouter);

//definiranje porta
app.listen(8080);

/**
 Napomena ocjenjivacu
 -povratkom iz cart-a, sve vrijednosti su uredno sacuvane i azurirane ako ih je klijent mijenjao
 -medjutim, nece biti vidljive sve dok se ne klikne na bilo koju kategoriju

 -recimo da klijent odabere par proizvoda, ode u kosaricu, vrati se na home page,
  klikne na kategoriju -> nastavit ce gdje je stao s dodavanjem proizvoda

 -moguce je potpuno ukloniti proizvod iz kosarice klikom na minus i postavljanjem kolicine na nulu
 -potrebno napraviti refresh da proizvod nestane iz prikaza
 */




