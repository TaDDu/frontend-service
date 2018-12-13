export default class loginService {
  constructor() {}

  google(data) {
    return new Promise(function(resolve, reject) {
      fetch(document.location.origin + "/api/login/googleauth", {
        method: "post",
        headers: {
          "Content-Type": " application/json"
        },
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
