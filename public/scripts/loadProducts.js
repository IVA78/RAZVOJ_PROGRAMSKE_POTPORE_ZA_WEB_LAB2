function loadProducts(categoryId) {
  const categoryDisplay = document.querySelector('.currCaregory');
  categoryDisplay.innerHTML = categoryId;

  //dohvati proizvode kategorije koje treba prikazati
  fetch(`/getProducts/${categoryId}`)
    .then(response => response.json())
    .then(products => {
      const main = document.getElementById("mainDiv");
      main.innerHTML = "";

      //izgeneriraj prikaz sadrzaja za svaki proizvod iz kategorije
      for (var i = 0; i < products.length; i++) {
        const product = products[i];
        const div = document.createElement("div");
        const img = document.createElement("img");
        div.setAttribute("class", "product");
        img.setAttribute("src", product.image);
        img.setAttribute("class", "bakery-image");
        const par = document.createElement("p");
        par.setAttribute("class", "productName");
        par.innerHTML = product.name;

        const cart_image = document.createElement("img");
        cart_image.setAttribute("class", "cart_image");
        cart_image.setAttribute("src", "images/cart.jpg");

        const quantityDisplay = document.createElement("p");
        quantityDisplay.setAttribute("class", "quantityDisplay");

        const sumDisplay = document.getElementById("suma");

        // Dodaj ID za proizvod (jedinstveno ime proizvoda kao identifikator)
        const productId = products[i].name;

        // Inicijalni prikaz količine -> prikazi kolicinu samo ako je razlicita od nule
        fetch(`/cart/quantity/${productId}`)
          .then(response => response.json())
          .then(quantity => {
            quantityDisplay.textContent = quantity;
            quantityDisplay.style.visibility = quantity !== 0 ? "visible" : "hidden";
          })
          .catch(error => {
            console.error('Greška prilikom dohvata količine proizvoda:', error);
          });

        // Inicijalni prikaz totalAmount -> prikazi sumu samo ako je razlicita od nule
        fetch('/cart/totalAmount')
          .then(response => response.json())
          .then(totalAmount => {
            sumDisplay.innerHTML = totalAmount !== 0 ? totalAmount : "";
          })
          .catch(error => {
            console.error('Greška prilikom dohvata total amount:', error);
          });


        // Dodavanje event listenera na sliku košarice
        cart_image.addEventListener("click", () => {
          // Slanje zahtjeva za dodavanje proizvoda u košaricu
          fetch(`/cart/add/${productId}`)
            .then(() => {
              // Ažuriranje prikaza količine
              fetch(`/cart/quantity/${productId}`)
                .then(response => response.json())
                .then(quantity => {
                  quantityDisplay.textContent = quantity;
                  quantityDisplay.style.visibility="visible";

                  // Ažuriranje prikaza sume
                  fetch('/cart/totalAmount')
                    .then(response => response.json())
                    .then(totalAmount => {
                      sumDisplay.innerHTML = totalAmount;
                    })
                    .catch(error => {
                      console.error('Greška prilikom dohvata total amount:', error);
                    });
                
                })
                .catch(error => {
                  console.error('Greška prilikom dohvata količine proizvoda:', error);
                });
        
              console.log("Proizvod dodan u košaricu, " + productId);
            })
            .catch(error => {
              console.error('Greška prilikom dodavanja proizvoda u košaricu:', error);
            });
        });

        //dodaj izgeneriran prikaz i njegove komponente u main
        div.appendChild(img);
        div.appendChild(par);
        div.appendChild(cart_image);
        div.appendChild(quantityDisplay);
        main.appendChild(div);
      }
    })
    .catch(error => {
      console.error('Greška prilikom dohvata proizvoda:', error);
    });
}




