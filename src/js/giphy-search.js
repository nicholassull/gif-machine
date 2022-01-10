export default class GiphyService {
  static gifSearch(term) {
    return fetch(`api.giphy.com/v1/gifs/search?&api_key=${process.env.API_KEY}&q=${term}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response)
        }
      })
  }
}