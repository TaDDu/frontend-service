import React, { Component } from "react";
import taskService from "../Task/taskService.js";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      created: false
    };
    var apikey = sessionStorage.getItem("apikey");
    this.taskService = new taskService(window.location.origin + "/api/tasks", {
      authorization: "Bearer " + apikey
    });
    this.handleChange = this.handleChange.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  handleChange(event) {
    if (event.target.id === "title") {
      this.setState({ title: event.target.value });
    }
    if (event.target.id === "description") {
      this.setState({ description: event.target.value });
    }
  }

  createTask(event) {
    event.preventDefault();
    this.taskService
      .create({ title: this.state.title, description: this.state.description })
      .then(success => {
        this.props.callback(success);
        this.setState({ created: true, title: "", description: "" });
      });
  }

  componentWillMount() {}

  componentWillUnmount() {
    console.log("UNMOUNT");
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <form className="form-signin" onSubmit={this.createTask}>
          <div className="form-label-group">
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
              required
              autofocus="true"
            />
            <label htmlFor="title">Task title</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="description"
              className="form-control"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <label htmlFor="description">Description</label>
          </div>

          <button
            className="btn btn-lg btn-primary btn-block text-uppercase"
            type="submit"
          >
            Create task
          </button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
