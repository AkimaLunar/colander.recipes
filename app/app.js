var $ = require('jquery');
require('./plugins');
require('./navigation');
require('./search');


var testTemplate = require("./templates/test.hbs");

function testHTML() {
  var resultsContainer = document.getElementById("test");
  resultsContainer.innerHTML = testTemplate();
}

testHTML();