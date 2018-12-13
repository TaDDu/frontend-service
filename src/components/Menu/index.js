import { bubble as Menu } from "react-burger-menu";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class Menu2 extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    var styles = {
      bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        right: "36px",
        top: "36px"
      },
      bmBurgerBars: {
        background: "#ecf0f1"
      },
      bmCrossButton: {
        height: "24px",
        width: "24px"
      },
      bmCross: {
        background: "#ecf0f1"
      },
      bmMenu: {
        background: "#34495e",
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em"
      },
      bmMorphShape: {
        fill: "#373a47"
      },
      bmItemList: {
        color: "#b8b7ad",
        padding: "0.8em"
      },
      bmItem: {
        display: "inline-block"
      },
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)"
      }
    };
    return (
      <Menu
        styles={styles}
        noOverlay
        pageWrapId={"inner"}
        outerContainerId={"outer"}
      >
        <div className="list-group">
          <Link to="/home" className="list-group-item">
            Home
          </Link>
          <Link to="/systems" className="list-group-item">
            Systems
          </Link>
          <Link to="/networks" className="list-group-item">
            Networks
          </Link>
          <Link to="/settings" className="list-group-item">
            Settings
          </Link>
        </div>
        <a className="menu-item-small" href="">
          Settings
        </a>
      </Menu>
    );
  }
}

export default Menu2;
