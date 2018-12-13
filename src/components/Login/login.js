import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import loginService from "./loginService";
class Login extends Component {
  constructor(props) {
    super(props);
    console.log("LOGIN", props);

    this.state = {
      use: {},
      authenticated: false,
      handleToUpdate: this.props.handleToUpdate,
      loggedin: false,
      username: "",
      password: "",
      redirect: false,
      session: {},
      user: {},
      header: {}
    };
    console.log(this.state);
    this.logIn = this.logIn.bind(this);
    this.authUser = this.authUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.loginService = new loginService();
  }

  handleChange(event) {
    console.log(this.state);
    if (event.target.id === "inputEmail") {
      this.setState({ username: event.target.value });
    }
    if (event.target.id === "inputPassword") {
      this.setState({ password: event.target.value });
    }
  }

  logIn(event) {
    event.preventDefault();
    console.log(this.state);
    this.authUser(this.state.username, this.state.password).then(success => {
      console.log("SUCCESSSSSSS", success);
      sessionStorage.setItem("authenticated", true);
      sessionStorage.setItem("apikey", success.jwt);
      console.log("SET REDIRECT");
      this.setState({ redirect: true });
    });
  }

  authUser(username, password) {
    return new Promise(function(resolve, reject) {
      var url = window.location.origin + "/api/login";
      var header = {
        "Content-Type": "application/json"
      };
      var data = {
        email: username,
        password: password
      };
      data = JSON.stringify(data);
      fetch(url, {
        method: "post",
        headers: header,
        body: data
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(body) {
          resolve(body);
        });
    });
  }

  responseGoogle(response) {
    console.log("Got response from google");
    if (response.error) {
      console.log("error from google", response);
    } else {
      var data = {
        pic: response.profileObj.imageUrl,
        firstName: response.profileObj.givenName,
        lastName: response.profileObj.familyName,
        email: response.profileObj.email,
        googleId: response.profileObj.googleId,
        accessToken: response.accessToken
      };

      this.loginService.google(data).then(success => {
        console.log("authenticated to api server");
        console.log("SUCCESSSSSSS", success);
        sessionStorage.setItem("authenticated", true);
        sessionStorage.setItem("apikey", success.jwt);
        console.log("SET REDIRECT");
        this.setState({ redirect: true });
      });
    }
  }

  render() {
    var from = {
      from: { pathname: this.props.props.history.location.pathname || "/" }
    };
    var redirect = this.state.redirect;
    console.log("FROM", from);
    if (redirect) {
      return <Redirect to={from} />;
    } else {
      return (
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={this.logIn}>
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      value={this.state.username}
                      onChange={this.handleChange}
                      required
                      autoFocus
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <hr className="my-4" />
                  <Link
                    to="/register"
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                  >
                    Register
                  </Link>
                  <GoogleLogin
                    clientId="975467020281-d513ujk0t5s6qgavpqsevmuf6l0qjpbp.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
