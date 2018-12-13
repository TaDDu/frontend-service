import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import userService from "../User/userService";
class Home extends Component {
  constructor(props) {
    console.log("HOME");
    super(props);
    this.state = {
      user: {}
    };
    var apikey = sessionStorage.getItem("apikey");
    this.userService = new userService(window.location.origin + "/api/users/", {
      authorization: "Bearer " + apikey
    });
  }

  componentWillMount() {}

  componentWillUnmount() {
    console.log("UNMOUNT");
  }

  componentDidMount() {
    this.userService.me().then(s => {
      this.setState({ user: s });
    });
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-wrap">
          <div className="p-2 flex-fill">
            <div className="card card-default">
              <div className="card-header">Profile</div>
              <div className="card-body">
                <h4 className="card-title">{this.state.user.email}</h4>
                <p>
                  Welcome: {this.state.user.firstName}{" "}
                  {this.state.user.lastName}
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 flex-grow-1">
            <div className="card card-default h-100">
              <div className="card-header">Temperature @ Location</div>
              <div className="card-body text-center">
                <h1>0 </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
