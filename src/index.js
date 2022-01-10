import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GiphyService from './js/giphy-search';

$(document).ready(function() {
  $("#button").click(function() {
    GiphyService.gifSearch()
      .then(function(response) {
        console.log(response.data[0].url)
      })
  });
});