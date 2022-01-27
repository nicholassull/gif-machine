export default class GiphyService {
  static gifSearch(term) {
    return fetch(`http://api.giphy.com/v1/gifs/search?&api_key=bHb24Z9czmOHKsFN6n9Dn4soe0jIBBNc&q=${term}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}