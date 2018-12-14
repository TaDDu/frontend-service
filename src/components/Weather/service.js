export default class weatherService {
  constructor(url, header) {
    this._url = url;
    this._header = header;
    this._header["Content-Type"] = "application/json";
  }

  city(city) {
    var url = this._url;
    var header = this._header;
    return new Promise(function(resolve, reject) {
      fetch(url + "/" + city, {
        method: "get",
        headers: header
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(body) {
          resolve(body);
        });
    });
  }
}
