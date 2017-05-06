// Initiating Algolia
var client = algoliasearch('P6BZRHYIM7', 'f1552f8453233d02a898154724697917');

// Templates
var recipeCardTemplate = require("../templates/card.hbs");
var errorTemplate = require("../templates/error.hbs");
var navigationLogo = (
  '<img class="navigation__logo navigation__inner"' + 
    'src="https://dl.dropboxusercontent.com/u/108453220/colander-recipes/colander-recipes-logo-s.svg"' +
    'onerror="this.onerror=null; this.src="https://dl.dropboxusercontent.com/u/108453220/colander-recipes/colander-recipes-logo-s.png">'
);

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
function navigationHTML() {
    $('#splashHeader').remove();
    $('.splash__description').remove();
    $('.splash__main').addClass('navigation').removeClass('splash__main');
    $('.splash__form').before(navigationLogo);
    $('.splash__form').addClass('navigation__form').removeClass('splash__form');
    $('.splash__input').addClass('navigation__input').removeClass('splash__input');
}

// Algolia factory
// var AlgoliaClient = function(){
//   function init(){
//    navigationHTML();
//   }
//   function search(){
//     //searchIndex function 
//   }
//     return { init: init, searchIndex: search } }
//   }

// var algoliaClient = new AlgoliaClient();

// algoliaClient.init()


// Search Algolia 'recipes' index
var index = client.initIndex('recipes');

function searchIndex(input, resultHtml, errorHtml) {
  navigationHTML();
  var query = $(input).val();
  index.search(query, function(err, content) {
    if (content.hits.length < 1) {
      errorHtml();
    }
    console.log(content.hits);
    resultHtml(content);
  });
  searchIndex = function(input, resultHtml, errorHtml) {
    var query = $(input).val();
    index.search(query, function(err, content) {
      if (content.hits.length < 1) {
        errorHtml();
      }
      console.log(content.hits);
      resultHtml(content);
    });
  }
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