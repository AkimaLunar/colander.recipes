var client = algoliasearch('P6BZRHYIM7', 'f1552f8453233d02a898154724697917');
var recipeCardTemplate = require("./templates/card.hbs");

// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'https://raw.githubusercontent.com/AkimaLunar/colander.recipes/master/app/recipes.json');
// ourRequest.onload = function() {
//   if (ourRequest.status >= 200 && ourRequest.status < 400) {
//     var recepies = JSON.parse(ourRequest.responseText);
//     console.log(recepies);
//     recipesHTML(recepies);
//   } else {
//     console.log("We connected to the server, but it returned an error.");
//   }
// };

// ourRequest.onerror = function() {
//   console.log("Connection error");
// };

// ourRequest.send();

function recipesHTML(recepies) {
  var resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = recipeCardTemplate(recepies);
}

var index = client.initIndex('recipes');
index.search('tofu', function(err, content) {
  console.log(content.hits);
  var recipes = content.hits;
  recipesHTML({recipes});
});

index.search('banana', function(err, content) {
  console.log(content.hits);
  var recipes = content.hits;
  recipesHTML({recipes});
});