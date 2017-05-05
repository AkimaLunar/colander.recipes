var client = algoliasearch('P6BZRHYIM7', 'f1552f8453233d02a898154724697917');
var recipeCardTemplate = require("../templates/card.hbs");
var errorTemplate = require("../templates/error.hbs");

// Elements
var container = 'results';
var searchForm = '#algoliaSearchForm';
var searchInput = '#algoliaSearchInput';
var searchSubmit = '#algoliaSearchSubmit';

// Rendering Templates
function recipesHTML(recepies) {
  var resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = recipeCardTemplate(recepies);
}
function errorHTML() {
  var resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = errorTemplate();
  console.log('nothing found');

}

// Algolia Search
var index = client.initIndex('recipes');

function searchIndex(input, resultHtml, errorHtml) {
  var query = $(input).val();
  index.search(query, function(err, content) {
    if (content.hits.length < 1) {
      errorHtml();
    }
    resultHtml(content);
  });
}

// Event Listeners
$('#algoliaSearchForm').submit(function(e){
  e.preventDefault();
  searchIndex(searchInput, recipesHTML, errorHTML);
})

$('#algoliaSearchInput').keyup( function() {
  if ( this.value.length < 4 ) return;
  searchIndex(searchInput, recipesHTML, errorHTML);
});