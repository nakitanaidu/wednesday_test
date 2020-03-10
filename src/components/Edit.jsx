import React, { Component } from "react";
import { navigate } from "@reach/router";

export default class Edit extends Component {
  
  updatePerson = evt => {
    let temp = this.props._id;
    console.log(this.props._id);
    navigate(`test/${temp}`, { state: { uid: temp } });
  };

  render() {
    return (
      <button
        className="add-button"
        data-uuid={this.props.uuid}
        onClick={this.updatePerson}
      >
        Edit
      </button>
    );
  }
}
