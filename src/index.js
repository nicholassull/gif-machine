import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import 'animate.css';
import GiphyService from './js/giphy-search';

$(document).ready(function() {
  $('#landing-search-button').click(function() {
    $('#landing-wrapper').toggle();
    $('#search-wrapper').fadeIn();
  });
  $("#button").click(function() {
    event.preventDefault();
    let searchTerm = $('#search-input').val();
    $('#img-wrapper').empty();
    GiphyService.gifSearch(searchTerm)
      .then(function(response) {
        for (let i = 0; i < 10; i++) {
          let url = response.data[i].images.fixed_height_small.url;
          $("#img-wrapper").append(`<img class="gif-thumbnail" src="${url}">`);
        }
      });
  });
});