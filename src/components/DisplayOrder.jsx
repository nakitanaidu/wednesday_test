import React, { Component } from "react";
import "../css/buttons.css";

export default class DisplayOrder extends Component {
  render() {
    return (
      <div className="display">
        <p>{this.props.food}</p>

        <p>{this.props.drink}</p>

        <p>{this.props.dessert}</p>

        <button
          className="add-button"
          data-uuid={this.props.uuid}
          onClick={this.props.removePerson}
        >
          Delete
        </button>
      </div>
    );
  }
}
