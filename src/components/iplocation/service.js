export default class systemsService {
  constructor(url, header) {
    this._url = url;
    this._header = header;
    this._header["Content-Type"] = "application/json";
  }

  me() {
    var url = this._url;
    var header = this._header;
    return new Promise(function(resolve, reject) {
      fetch(url, {
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
