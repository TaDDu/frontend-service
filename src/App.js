import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// before auth
import { Redirect, Switch, Route } from "react-router-dom";
import userService from "./components/User/userService";
import Login from "./components/Login/login.js";
import Register from "./components/Register/register.js";

// after auth
import Menu2 from "./components/Menu/Header.jsx";
import Home from "./components/Home";

const Protected = () => <h3>Protected</h3>;

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      authenticated: false,
      redirect: false
    };
    var handleToUpdate = this.handleToUpdate.bind(this);
  }

  componentWillMount() {
    var session = sessionStorage.getItem("authenticated");
    console.log("SESSION", session);
    if (session === "true") {
      var apikey = sessionStorage.getItem("apikey");
      this.userService = new userService(
        window.location.origin + "/api/users/",
        {
          authorization: "Bearer " + apikey
        }
      );
      this.userService.me().then(me => {
        if (me.error) {
          this.setState({ authenticated: false });
        } else {
          this.setState({ authenticated: true });
        }
      });
      // get apikey and check auth
    } else {
      console.log("Redirect");
      this.setState({ redirect: true });
      sessionStorage.setItem("authenticated", false);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
    var session = sessionStorage.getItem("authenticated");
    console.log("SESSION", session);
    if (session === "true" && this.state.authenticated === false) {
      // get apikey and check auth
      this.setState({ authenticated: true, redirect: false });
    }
  }

  handleToUpdate(someArg) {
    console.log("HANDLEUPDATE", someArg);
    if (someArg.error) {
      this.setState({ error: true, errorMsg: someArg.msg });
    } else {
      console.log("HANDLEUPDATE", someArg);
      var appData = {
        //header:{user_id: someArg[0].id,license_id:someArg[0].license_id },
        user: someArg
      };
      var session = sessionStorage.getItem("authenticated");
      console.log("SESSION", session);
      if (session === "true") {
        // get apikey and check auth
        this.setState({ authenticated: true });
      } else {
        this.setState({ redirect: true });
        sessionStorage.setItem("authenticated", false);
      }
    }
  }

  render() {
    var isLoggedIn = this.state.authenticated;
    console.log("isLoggedIn", isLoggedIn);
    return (
      <div id="outer" className="">
        {isLoggedIn ? (
          <div>
            <Menu2 />
            <div id="inner" className="container">
              <Switch>
                <Route path="/home" component={Home} />
                <Redirect to="/home" />
              </Switch>
            </div>
          </div>
        ) : (
          <div className="container">
            <Switch>
              <Route path="/register" exact component={Register} />
              <Route
                path="/login"
                exact
                render={props => (
                  <Login props={props} handleToUpdate={this.handleToUpdate} />
                )}
              />
              <Redirect to="/login" />
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

export default App;
