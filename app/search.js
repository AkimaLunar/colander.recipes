var client = algoliasearch('P6BZRHYIM7', 'f1552f8453233d02a898154724697917');
var recipeCardTemplate = require("../templates/card.hbs");
var errorTemplate = require("../templates/error.hbs");

// Rendering Templates
function recipesHTML(recepies) {
  var resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = recipeCardTemplate(recepies);
}
function errorHTML() {
  var resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = errorTemplate();
}

// Algolia Search
var index = client.initIndex('recipes');

$('#algoliaSearchForm').submit(function(e){
  e.preventDefault();
  var query = ($('#algoliaSearchInput').val());
  index.search(query, function(err, content) {
    if (content.hits.lenght < 1) {
      errorHTML();
    }
    recipesHTML(content);
  });
})