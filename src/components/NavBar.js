import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu size="large">
        <Menu.Item
          name="Card Categories"
          active={this.state.activeItem === "Card Categories"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="About"
          active={this.state.activeItem === "About"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Help"
          active={this.state.activeItem === "Help"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Profile"
          active={this.state.activeItem === "Profile"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
