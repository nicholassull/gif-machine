import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './js/giphy-search';

$(document).ready(function() {
  $("#button").click(function() {
    GiphyService.gifSearch()
      .then(function(response) {
        for (let i = 0; i < 10; i++) {
          let url = response.data[i].images.fixed_height_small.url;
          $("#img-wrapper").append(`<img src="${url}">`);
        }
      });
  });
});