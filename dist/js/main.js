/******/ (() => { // webpackBootstrap
/******/ 	/************************************************************************/
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [unused] */
/*! runtime requirements:  */
$(document).ready(function () {
  //reference
  var main = $('.Main');
  var myHost = 'http://localhost:80/php-ajax-dischi/partials/script/database_ajax.php'; // init handlebars template

  var source = $('#album-template').html();
  var template = Handlebars.compile(source); // call function

  database(myHost, main, template);
}); // end document ready

/***********************
    FUNCTION           *
 **********************/

function database(myHost, main, template) {
  $.ajax({
    url: myHost,
    method: 'GET',
    success: function success(res) {
      printTemplate(res, main, template);
    },
    error: function error() {
      console.log('Error call');
    }
  });
}

function printTemplate(res, main, template) {
  for (var i = 0; i < res.length; i++) {
    var data = res[i];
    var context = {
      img: data.cover,
      title: data.album,
      author: data.author,
      year: data.year
    }; //output

    var output = template(context); // items

    main.append(output);
  }
}
})();

(() => {
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [unused] */
/*! runtime requirements:  */
// extracted by mini-css-extract-plugin
})();

/******/ })()
;