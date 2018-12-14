import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import userService from "../User/userService";
import ipLocationService from "../iplocation/service.js";
import weatherService from "../Weather/service.js";
class Home extends Component {
  constructor(props) {
    console.log("HOME");
    super(props);
    this.state = {
      user: {},
      location: {
        city: "loading"
      },
      weather: {
        main: {
          temp: "loading",
          pressure: "loading",
          humidity: "loading"
        }
      }
    };
    var apikey = sessionStorage.getItem("apikey");
    this.userService = new userService(window.location.origin + "/api/users/", {
      authorization: "Bearer " + apikey
    });
    this.ipLocationService = new ipLocationService(
      window.location.origin + "/api/ip-location",
      {
        authorization: "Bearer " + apikey
      }
    );
    this.weatherService = new weatherService(
      window.location.origin + "/api/weather",
      {
        authorization: "Bearer " + apikey
      }
    );
  }

  componentWillMount() {}

  componentWillUnmount() {
    console.log("UNMOUNT");
  }

  componentDidMount() {
    this.userService.me().then(s => {
      this.setState({ user: s });
      this.ipLocationService.me().then(location => {
        if (location.city == null) {
          location.city = "No location";
        } else {
          this.weatherService.city(location.city).then(weather => {
            this.setState({ weather: weather });
          });
        }
        this.setState({ location: location });
      });
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
              <div className="card-header">
                Temperature @ {this.state.location.city}
              </div>
              <div className="card-body text-center">
                <h1>{this.state.weather.main.temp}</h1>
                <p>Pressure: {this.state.weather.main.pressure}</p>
                <p>Humidity: {this.state.weather.main.humidity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
