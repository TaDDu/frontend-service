export default class geoService {
  constructor(url, header) {
    this._url = url;
    this._header = header;
    this._header["Content-Type"] = "application/json";
  }

  reverseLocation(data) {
    var url = this._url;
    var header = this._header;
    return new Promise(function(resolve, reject) {
      fetch(url + "/reverse", {
        method: "post",
        headers: header,
        body: JSON.stringify(data)
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
