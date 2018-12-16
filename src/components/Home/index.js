import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import userService from "../User/userService";
import ipLocationService from "../iplocation/service.js";
import weatherService from "../Weather/service.js";
import taskService from "../Task/taskService.js";
import TaskForm from "../Task/form.js";
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
      },
      tasks: []
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
    this.taskService = new taskService(window.location.origin + "/api/tasks", {
      authorization: "Bearer " + apikey
    });
    this.callBack = this.callBack.bind(this);
  }

  callBack(data) {
    console.log("callBack", data);
    var tasks = this.state.tasks;
    tasks.unshift(data);
    this.setState({ tasks: tasks });
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
      this.taskService.all().then(tasks => {
        this.setState({ tasks: tasks });
      });
    });
  }

  render() {
    var TaskList = () => {
      if (this.state.tasks.length > 0) {
        return this.state.tasks.map(task => {
          return (
            <li className="list-group-item list-group-item-dark" key={task.id}>
              {task.title}
            </li>
          );
        });
      } else {
        return (
          <li className="list-group-item list-group-item-dark">No tasks</li>
        );
      }
    };

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
        <div className="d-flex flex-wrap">
          <div className="p-2 flex-fill">
            <div className="card card-default">
              <div className="card-header">Tasks {this.state.tasks.length}</div>
              <div className="card-body">
                <TaskForm callback={this.callBack} />
                <ul className="list-group">
                  <TaskList />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
