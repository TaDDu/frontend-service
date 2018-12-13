import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
export default class Menu2 extends React.Component {
  constructor(props) {
    console.log("HEADER LOADED");
    super(props);
    console.log(props);
    this.state = {};
    this.changeMenu = this.changeMenu.bind(this);

    this.handleStateChange = this.handleStateChange.bind(this);
  }
  changeMenu() {
    console.log("CLICK");
    this.setState({
      areMenusOpen: !this.state.areMenusOpen
    });
  }

  handleStateChange(state) {
    console.log(state);
    this.setState({ areMenusOpen: state.isOpen });
  }

  render() {
    return (
      <div>
        <Menu
          width={"100%"}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          disableOverlayClick
          noOverlay
          isOpen={this.state.areMenusOpen}
          onStateChange={state => this.handleStateChange(state)}
          itemListClassName={"sidebar-nav"}
          customCrossIcon={
            <div>
              <i className="fa fa-times fa-2x" />
            </div>
          }
        >
          <li className="sidebar-brand">
            <i>Welcome</i>
          </li>
          <li className="col-12">
            <a
              href="#"
              onClick={this.changeMenu}
              className="hidden-sm hidden-md hidden-lg"
            >
              <i className="fas fa-home">
                {" "}
                Home <span className="sr-only">(current)</span>
              </i>
            </a>
          </li>
          <li className="col-12">
            <Link
              to="/accounts"
              onClick={this.changeMenu}
              className="hidden-sm hidden-md hidden-lg"
            >
              <i className="fas fa-building"> Accounts </i>
            </Link>{" "}
            <i
              className="fas fa-caret-square-down text-white"
              data-toggle="collapse"
              data-target="#fast_form"
            />
            <div id="fast_form" className="collapse" />
          </li>
          <li className="col-12">
            <Link
              to="/contacts"
              onClick={this.changeMenu}
              className="hidden-sm hidden-md hidden-lg"
            >
              <i className="fas fa-users"> Contacts</i>
            </Link>
          </li>
          <li className="col-12">
            <Link
              to="/settings"
              onClick={this.changeMenu}
              className="hidden-sm hidden-md hidden-lg"
            >
              <i className="fas fa-cogs"> Settings</i>
            </Link>
          </li>
        </Menu>
        <nav
          className="navbar navbar-default navbar-fixed-top hidden-xs"
          style={{ backgroundColor: "#34495e" }}
        >
          <div className="container">
            <div className="navbar-header">
              <a
                className="navbar-brand"
                href="#"
                style={{ paddingTop: "5px" }}
              />
            </div>
            <div className="nav navbar-nav">
              <button
                type="button"
                onClick={this.changeMenu}
                className="btn navbar-toggle navbar-btn"
                style={{ display: "block" }}
              >
                <i
                  className="fa fa-bars"
                  onClick={this.changeMenu}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
