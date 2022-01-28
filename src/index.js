import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import 'animate.css';
import GiphyService from './js/giphy-search';

function displaySearchResults(searchTerm) {
  GiphyService.gifSearch(searchTerm)
      .then(function(response) {
        for (let i = 0; i < 15; i++) {
          let url = response.data[i].images.fixed_height_small.url;
          $("#search-img-wrapper").append(`<img id="image${i}" class="gif-thumbnail" src="${url}">`);
        }
      });
}

function attachImageListeners() {
  $('div#search-img-wrapper').on('click', "img", function() {
    console.log('The id of this <img> is ' + this.class + ".");
  });
}

$(document).ready(function() {
  attachImageListeners()
  $('#landing-search-button').click(function() {
    $('#landing-wrapper').toggle();
    $('#search-wrapper').fadeIn();
  });
  
  $("#search-button").click(function() {
    event.preventDefault();
    let searchTerm = $('#search-input').val();
    $('#search-img-wrapper').empty();
    displaySearchResults(searchTerm);
  });
});