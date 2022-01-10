import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './js/giphy-search';

$(document).ready(function() {
  $("#button").click(function() {
    GiphyService.gifSearch()
      .then(function(response) {
        let url = response.data[0].images.fixed_height_small.url;
        $("#text").html(`<img src="${url}">`);
      });
  });
});