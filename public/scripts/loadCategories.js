document.addEventListener('DOMContentLoaded', async function() {
  const categoriesList = document.getElementById('categoriesList');

  // Dohvaćanje kategorija iz servera
  fetch('getCategories')
    .then(function(response) {
      return response.json();
    })
    .then(function(categories) {
      // Generiranje liste kategorija
      var categoriesHTML = '';
      categories.forEach(function(category) {
        categoriesHTML += '<li class="category" id="' + category.name + '">' + category.name + '</li><hr>';
      });

      // Ažuriranje HTML-a sa generiranom listom kategorija
      categoriesList.innerHTML = categoriesHTML;

      // Dodavanje onClick događaja za svaku kategoriju - prikazi proizvode
      var categoryElements = document.getElementsByClassName('category');
      for (var i = 0; i < categoryElements.length; i++) {
        var categoryElement = categoryElements[i];

        categoryElement.addEventListener('click', function() {
          var categoryName = this.id;
          loadProducts(categoryName);
        });
        
      }
    })
    .catch(function(error) {
      console.error('Dogodila se pogreška:', error);
    });
});


