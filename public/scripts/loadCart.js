function displayBoughtProducts() {
  const boughtProductsElement = document.getElementById("boughtProducts");

  fetch('/cart/getAll')
    .then(response => response.json())
    .then(items => {
      Object.keys(items).forEach(productId => {
        const product = items[productId];

        //id ili class ne smije imati razmak, pa ga tu uglanjam da ga mogu koristiti kao svojevrsni id
        const cleanProductName = product.name.replace(/\s/g, "");

        const itemElement = document.createElement("div");
        itemElement.classList.add(`item_${cleanProductName}`);
        itemElement.setAttribute("id", "element_id");

        // Prikazujte naziv, cijenu, količinu i sliku artikla
        itemElement.innerHTML = `
        <p class="productName">${product.name}</p>
        <p class="amount_${cleanProductName}" id="quantity_id">${product.quantity}</p>
        <img src="${product.imageurl}" class="itemImage">
        `;

         boughtProductsElement.appendChild(itemElement);
         
       });
     })
     .catch(error => {
       console.error('Greška prilikom dohvata podataka o artiklima:', error);
     });
 }

 function AddPlusMinusToBoughtProducts() {

  fetch('/cart/getAll')
  .then(response => response.json())
  .then(items => {
    Object.keys(items).forEach(productId => {
      const product = items[productId];

      const cleanProductName = product.name.replace(/\s/g, "");
      const itemElement = document.querySelector(`.item_${cleanProductName}`);

      const plus = document.createElement("button");
        plus.classList.add("buttonPlus");
        plus.innerText = '+';

        const minus = document.createElement("button");
        minus.classList.add("buttonMinus");
        minus.innerText = '-';

        const PlusMinusContainer = document.createElement("div");
        PlusMinusContainer.classList.add("PlusMinusContainer");

        plus.addEventListener("click",  () => {

          fetch(`/cart/add/${productId}`)
            .then(() => {
              // Ažuriranje prikaza količine
              fetch(`/cart/quantity/${productId}`)
                .then(response => response.json())
                .then(quantity => {

                  const amountDisplay = document.querySelector(`.amount_${cleanProductName}`);
                  console.log(amountDisplay);
                  amountDisplay.textContent = quantity;
                  
                  // Dohvati total amount
                  fetch('/cart/totalAmount')
                    .then(response => response.json())
                    .then(totalAmount => {

                      const sumDisplay = document.getElementById("suma");
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
        });
        
     
        minus.addEventListener("click",   () => {
          fetch(`/cart/remove/${productId}`)
          .then(() => {
            // Ažuriranje prikaza količine
            fetch(`/cart/quantity/${productId}`)
              .then(response => response.json())
              .then(quantity => {

                const amountDisplay = document.querySelector(`.amount_${cleanProductName}`);
                amountDisplay.textContent = quantity;
                console.log(amountDisplay);
                
                // Dohvati total amount i azuriraj
                fetch('/cart/totalAmount')
                  .then(response => response.json())
                  .then(totalAmount => {

                    const sumDisplay = document.getElementById("suma");
                    sumDisplay.innerHTML = totalAmount;

                  })
                  .catch(error => {
                    console.error('Greška prilikom dohvata total amount:', error);
                  });

              
                })
              .catch(error => {
                console.error('Greška prilikom dohvata količine proizvoda:', error);
              });
      
            console.log("Proizvod uklonjen iz košarice, " + productId);
          })
        });
        
         PlusMinusContainer.appendChild(plus);
         PlusMinusContainer.appendChild(minus);
         itemElement.appendChild(PlusMinusContainer);
         
       
     });
   })
   .catch(error => {
     console.error('Greška prilikom dohvata podataka o artiklima:', error);
   });
      
 }

function totalAmountDisplay() {

   const sumDisplay = document.getElementById("suma");
   // Dohvati total amount
   fetch('/cart/totalAmount')
   .then(response => response.json())
   .then(totalAmount => {
     sumDisplay.innerHTML = totalAmount;

     if(totalAmount === 0) {
      const productsWindow = document.getElementById("boughtProducts");
      const emptyMessage = document.createElement("p");
      emptyMessage.setAttribute("class", "emptyMessage");
      emptyMessage.innerHTML = "Your cart is empty :(";
      productsWindow.appendChild(emptyMessage);
     } else {
         displayBoughtProducts();
         AddPlusMinusToBoughtProducts();
     }

   })
   .catch(error => {
     console.error('Greška prilikom dohvata total amount:', error);
   });

}

totalAmountDisplay();






