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
      show_closed: false,
      show_open: true,
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
    this.taskDone = this.taskDone.bind(this);
    this.taskDelete = this.taskDelete.bind(this);
    this.toggleClosed = this.toggleClosed.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  callBack(data) {
    console.log("callBack", data);
    var tasks = this.state.tasks;
    tasks.unshift(data);
    this.setState({ tasks: tasks });
  }

  toggleClosed() {
    if (this.state.show_closed) {
      this.setState({ show_closed: false });
    } else {
      this.setState({ show_closed: true });
    }
  }

  toggleOpen() {
    if (this.state.show_open) {
      this.setState({ show_open: false });
    } else {
      this.setState({ show_open: true });
    }
  }

  taskDone(id) {
    this.taskService.done(id).then(res => {
      var tasks = this.state.tasks;
      tasks.map(task => {
        if (task.id == id) {
          task.closed = true;
        }
      });
      this.setState({ tasks: tasks });
    });
  }

  taskDelete(id) {
    this.taskService.delete(id).then(res => {
      var tasks = this.state.tasks;
      tasks = tasks.filter(task => task.id != id);
      this.setState({ tasks: tasks });
    });
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
        var tasks = this.state.tasks.filter(task => {
          if (this.state.show_closed && task.closed == true) {
            return task;
          }
          if (this.state.show_open && task.closed == false) {
            return task;
          }
        });

        return tasks.map(task => {
          if (task.closed == true) {
            var title = <del>{task.title}</del>;
          } else {
            var title = task.title;
          }
          return (
            <div
              key={task.id}
              className="card card-default"
              style={{ border: 0 }}
            >
              <div
                className="card-header"
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  fontWeight: "initial"
                }}
              >
                <div className="d-flex align-content-center align-items-center">
                  <div className="p-2">{title}</div>
                  <div className="ml-auto p-2">
                    <div className="btn-group btn-group-sm">
                      {task.closed ? (
                        <button
                          type="button"
                          className="btn btn-primary disabled"
                          style={{
                            backgroundColor: "#2980b9",
                            borderColor: "#2980b9"
                          }}
                        >
                          <i className="fas fa-check" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{
                            backgroundColor: "#2980b9",
                            borderColor: "#2980b9"
                          }}
                          onClick={() => {
                            this.taskDone(task.id);
                          }}
                        >
                          <i className="far fa-square" />
                        </button>
                      )}

                      {!task.closed ? (
                        <button
                          type="button"
                          className="btn btn-info"
                          style={{
                            backgroundColor: "#16a085",
                            borderColor: "#16a085"
                          }}
                        >
                          <i className="far fa-edit" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-info disabled"
                          style={{
                            backgroundColor: "#16a085",
                            borderColor: "#16a085"
                          }}
                        >
                          <i className="far fa-edit" />
                        </button>
                      )}

                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{
                          backgroundColor: "#c0392b",
                          borderColor: "#c0392b"
                        }}
                        onClick={() => {
                          this.taskDelete(task.id);
                        }}
                      >
                        <i className="fas fa-trash" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      } else {
        return <h2>No tasks</h2>;
      }
    };

    var ClosedCount = () => {
      if (this.state.tasks.length > 0) {
        var tasks = this.state.tasks.filter(task => task.closed == true);
        return tasks.length;
      } else {
        return "0";
      }
    };

    var OpenCount = () => {
      if (this.state.tasks.length > 0) {
        var tasks = this.state.tasks.filter(task => task.closed == false);
        return tasks.length;
      } else {
        return "0";
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
              <div className="card-header">
                <div className="d-flex align-content-center align-items-center">
                  <div className="p-2">Tasks {this.state.tasks.length}</div>
                  <div className="ml-auto p-2">
                    <div className="btn-group btn-group-sm">
                      <button
                        className="btn btn-primary"
                        onClick={this.toggleOpen}
                      >
                        open:
                        <OpenCount />
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={this.toggleClosed}
                      >
                        closed:
                        <ClosedCount />
                      </button>
                      <button
                        className="btn btn-info"
                        data-toggle="collapse"
                        data-target="#demo"
                      >
                        Add new
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div id="demo" className="collapse">
                  <TaskForm callback={this.callBack} />
                  <hr />
                </div>
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
