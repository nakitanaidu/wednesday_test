import React, { Component } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";

export default class Add extends Component {

    constructor(props) {
        super(props);
        this.state = { user: {} };
        // get handle on the DOM element
        this.myRef = React.createRef();
      }

  goHome = e => {
    navigate(`/`);
  };

  addPerson = e => {
    e.preventDefault();
    var fname = e.target.elements["fname"].value;
    var lname = e.target.elements["lname"].value;
    var age = e.target.elements["age"].value;
    var job = e.target.elements["job"].value;

    // POST REQUIRES EXTRA PARAMETERS AND THEY NEED TO MATCH WITH MONGODB FORMAT (userModel, UserScheme in users-model.js)

    Axios.post(`http://localhost:4000/api/users`, {
      first_name: fname,
      last_name: lname,
      age: age,
      job: job
    }).then(res => {
      console.log(res.data);
      alert("USER ADDED:" + fname);
    });
  };

  render() {
    
    
    return (
      <div className="add-form-wrapper">
        <h1>Add Employee</h1>
        <form className="special" onSubmit={this.addPerson} ref={this.myRef}>
        <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="f-name" required />
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="l-name" required />
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age" required />

            <label htmlFor="job">Job:</label>
            <input type="text" id="job" name="job" required />

          <br />
          <button type="submit" className="add-button">
            Update details
          </button>
        </form>
        <button className="add-button" onClick={this.goHome}>
          Return Home
        </button>
        <p>{this.props.myid}</p>
      </div>
    );
  }
}
