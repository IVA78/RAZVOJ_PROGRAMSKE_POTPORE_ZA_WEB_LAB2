const data = {
   "website": "Rustic Breads and Treats",
   "categories": [
       { 
           "name" : "Bread",
           "products" : [
               { 
                   "name" : "Baguete", "image" : "images/BreadBaguete.jpg"
               },
               { 
                   "name" : "Banana bread", "image" : "images/BreadBannanaBread.jpg"
               },                
               { 
                   "name" : "Brioche", "image" : "images/BreadBrioche.jpg"
               },
               { 
                  "name" : "Ciabatta", "image" : "images/BreadCiabatta.jpg"
              },
              { 
               "name" : "Sweet bread with raisins", "image" : "images/BreadSweetBreadWithRaisins.jpg"
              }
           ]
       },
       { 
         "name" : "American cookies",
         "products" : [
             { 
                 "name" : "Chocolate Cookies", "image" : "images/AmericanCookiesChocolateCookies.jpg"
             },
             { 
                 "name" : "Penaut butter cookie", "image" : "images/AmericanCookiesPenautButterCookie.jpg"
             },                
             { 
                 "name" : "Pumpkin cookie", "image" : "images/AmericanCookiesPumpkinCookie.jpg"
             },
             { 
                "name" : "Sprinkles cookie", "image" : "images/AmericanCookiesSprinklesCookie.jpg"
            },
            { 
             "name" : "Walnuts cookie", "image" : "images/AmericanCookiesWalnutsCookie.jpg"
            }
         ]
       },

       { 
         "name" : "Rolls",
         "products" : [
             { 
                 "name" : "Cinammon rolls", "image" : "images/RollsCinammonRolls.jpg"
             },
             { 
                 "name" : "Mini cinammon rolls", "image" : "images/RollsMiniCinammonRolls.jpg"
             },                
             { 
                 "name" : "Apple cinammon rolls", "image" : "images/RollsAppleCinammonRolls.jpg"
             },
             { 
                "name" : "Swedish Cardamom Rolls", "image" : "images/RollsSwedishCardamomRolls.jpg"
            },
            { 
             "name" : "Vanilla pecan rolls", "image" : "images/RollsVanillaPecanRolls.jpg"
            }
         ]
       },

       { 
         "name" : "Muffins",
         "products" : [
             { 
                 "name" : "Blueberry muffin", "image" : "images/MuffinsBlueberry.jpg"
             },
             { 
                 "name" : "Apple cinammon muffin", "image" : "images/MuffinsAppleCinammon.jpg"
             },                
             { 
                 "name" : "Chocolate muffin", "image" : "images/MuffinsChocolate.jpg"
             },
             { 
                "name" : "Penaut butter muffin", "image" : "images/MuffinsPenautButter.jpg"
            },
            { 
             "name" : "Vanilla muffin", "image" : "images/MuffinsVanilla.jpg"
            }
         ]
       },

       { 
         "name" : "Cheescake",
         "products" : [
             { 
                 "name" : "Lemon cheescake", "image" : "images/CheescakeLemon.jpg"
             },
             { 
                 "name" : "Raspberry cheescake", "image" : "images/CheescakeRaspberry.jpg"
             },                
             { 
                 "name" : "Strawberry cheescake", "image" : "images/CheescakeStrawberry.jpg"
             },
             { 
                "name" : "Vanilla cheescake", "image" : "images/CheescakeVanilla.jpg"
            },
            { 
             "name" : "Nutella cheescake", "image" : "images/CheescakeNutella.jpg"
            }
         ]
       },

       { 
         "name" : "Croissant",
         "products" : [
             { 
                 "name" : "Hazelnut croissant", "image" : "images/CroissantHazelnut.jpg"
             },
             { 
                 "name" : "Chocolate croissant", "image" : "images/CroissantChocolate.jpg"
             },                
             { 
                 "name" : "Pistachio croissant", "image" : "images/CroissantPistachio.jpg"
             },
             { 
                "name" : "Capuccino croissant", "image" : "images/CroissantCappuccino.jpg"
            },
            { 
             "name" : "Caramel croissant", "image" : "images/CroissantCaramel.jpg"
            }
         ]
       },

       { 
         "name" : "Cakes",
         "products" : [
             { 
                 "name" : "Cherry cake", "image" : "images/CakesCherryCake.jpg"
             },
             { 
                 "name" : "Orange cake", "image" : "images/CakesOrangeCake.jpg"
             },                
             { 
                 "name" : "Strawberry cake", "image" : "images/CakesStrawberryCake.jpg"
             },
             { 
                "name" : "Chocolate cake", "image" : "images/CakesChocolateCake.jpg"
            },
            { 
             "name" : "Coconut cake", "image" : "images/CakesCoconutCake.jpg"
            }
         ]
       },

       { 
         "name" : "Italian",
         "products" : [
             { 
                 "name" : "Cannoli", "image" : "images/ItalianCannoli.jpg"
             },
             { 
                 "name" : "Sfogliatella", "image" : "images/ItalianSfogliatella.jpg"
             },                
             { 
                 "name" : "Panettone", "image" : "images/ItalianPanettone.jpg"
             },
             { 
                "name" : "Bombolini", "image" : "images/ItalianBombolini.jpg"
            },
            { 
             "name" : "Tiramisu", "image" : "images/ItalianTiramisu.jpg"
            }
         ]
       },

       { 
         "name" : "Coffee",
         "products" : [
             { 
                 "name" : "Espresso", "image" : "images/CoffeeEspresso.jpg"
             },
             { 
                 "name" : "Short macchiato", "image" : "images/CoffeeShortMacchiato.jpg"
             },                
             { 
                 "name" : "Long macchiato", "image" : "images/CoffeeLongMacchiato.jpg"
             },
             { 
                "name" : "Capuccino", "image" : "images/CoffeeCapuccino.jpg"
            },
            { 
             "name" : "Long black coffee", "image" : "images/CoffeeLongBlackCoffee.jpg"
            }
         ]
       },

       { 
        "name" : "Donut",
        "products" : [
            { 
                "name" : "Chocolate donut", "image" : "images/DonutsChocolate.jpg"
            },                
            { 
                "name" : "Vanilla donut", "image" : "images/DonutsVanilla.jpg"
            },
            { 
               "name" : "Pistachio donut", "image" : "images/DonutsPistachio.jpg"
           },
           { 
            "name" : "Caramel donut", "image" : "images/DonutsCaramel.jpg"
           },
           { 
            "name" : "Strawberry donut", "image" : "images/DonutsStrawberry.jpg"
        }
        ]
      }

      
   ]
}

module.exports = data;
