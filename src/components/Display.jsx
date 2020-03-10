import React, { Component } from "react";
import "../css/buttons.css";
import Edit from "./Edit";
import Axios from "axios";


export default class Display extends Component {

  removePerson = evt => {
    Axios.delete(`http://localhost:4000/api/users/${this.props._id}`).then(res => {
      console.log(res.data);
      
      if (res.data.result === true ) {
        this.props.refreshUser()
      }
    });
  };
  
  render() {
    return (
      <div className="display">
        <p>{this.props.first_name}</p>

        <p>{this.props.last_name}</p>

        <p>{this.props.age}</p>

        <p>{this.props.job}</p>

        <div>
       <Edit _id={this.props._id}/>
        </div>

        <div>
       
       </div>

        <button
        className="add-button" 
        data-uuid={this.props.uuid}
        onClick={this.removePerson}>
        Delete
        </button>

       
      </div>
    );
  }
}
