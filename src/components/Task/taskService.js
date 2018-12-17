export default class taskService {
  constructor(url, header) {
    this._url = url;
    this._header = header;
    this._header["Content-Type"] = "application/json";
  }

  all() {
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
  create(data) {
    var url = this._url;
    var header = this._header;
    return new Promise(function(resolve, reject) {
      fetch(url, {
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
  done(id) {
    var url = this._url;
    var header = this._header;
    return new Promise(function(resolve, reject) {
      fetch(url + "/" + id, {
        method: "put",
        headers: header,
        body: JSON.stringify({ closed: true })
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(body) {
          resolve(body);
        });
    });
  }

  delete(id) {
    var url = this._url;
    var header = this._header;
    return new Promise(function(resolve, reject) {
      fetch(url + "/" + id, {
        method: "delete",
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
