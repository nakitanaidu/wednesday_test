import React, { Component } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";
// import Display from "./Display";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    // get handle on the DOM element
    this.myRef = React.createRef();
  }

  goHome = e => {
    navigate(`/`);
  };

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/users/${this.props.uid}`).then(res => {
      // console.table(res.data);
      this.setState({ user: res.data });
    });
  }

  editPerson = e => {
    e.preventDefault();

    var formData = new FormData(this.myRef.current);

    var dataToSend = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      age: formData.get("age"),
      job: formData.get("job")
    };

    Axios.put(
      `http://localhost:4000/api/users/${this.props.myid}`,
      dataToSend
    ).then(res => {
      console.log(res);
    });
  };

  render() {
    var { last_name, first_name, age, job } = this.state.user;
    return (
      <div className="edit-form-wrapper">
        <h1>Edit Employee</h1>
        <form className="special" onSubmit={this.editPerson} ref={this.myRef}>
          <label>First name:</label>
          <input type="text" name="first_name" defaultValue={first_name} />

          <label>Last name:</label>
          <input type="text" name="last_name" defaultValue={last_name} />

          <label>Age:</label>
          <input type="text" name="age" defaultValue={age} />

          <label>Job:</label>
          <input type="text" name="job" defaultValue={job} />

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

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     uid: null,
  //     firstname: "",
  //     lastname: "",
  //     age: "",
  //     job: ""
  //   };
  // }

  // goHome = e => {
  //   navigate(`/`);
  // };

  // componentDidMount = e => {
  //   Axios.get(`http://localhost:4000/api/users/${this.props.myid}`).then(
  //     res => {
  //       console.log(res);
  //       this.setState({
  //         firstname: res.data.first_name,
  //         lastname: res.data.last_name,
  //         age: res.data.age,
  //         job: res.data.job
  //       });
  //     }
  //   );
  // };

  // updatePerson = e => {
  //   e.preventDefault();
  //   let data = {
  //     first_name: this.state.firstname,
  //     last_name: this.state.lastname,
  //     age: this.state.age,
  //     job: this.state.job
  //   };
  //   Axios.put(`http://localhost:4000/api/users/${this.props.myid}`, data).then(
  //     res => {
  //       console.table(res);
  //     }
  //   );
  // };

  // updatefName = e => {
  //   this.setState({ firstname: e.target.value });
  // };

  // updatelName = e => {
  //   this.setState({ lastname: e.target.value });
  // };

  // updateAge = e => {
  //   this.setState({ age: e.target.value });
  // };

  // updateJob = e => {
  //   this.setState({ job: e.target.value });
  // };

  // render() {
  //   return (
  //     <div>
  //       <h1>Edit Employee</h1>
  //       <form className="form-wrapper" onSubmit={this.updatePerson}>
  //         <label htmlFor="fname">First name:</label>
  //         <input
  //           type="text"
  //           id="fname"
  //           name="employee-fname"
  //           onChange={this.updatefName}
  //           value={this.state.firstname}
  //           placeholder={this.updatePerson.firstname}
  //         />
  //         <br />
  //         <label htmlFor="lname">Last name:</label>
  //         <input
  //           type="text"
  //           id="lname"
  //           name="employee-lname"
  //           onChange={this.updatelName}
  //           value={this.state.lastname}
  //           placeholder={this.updatePerson.firstname}
  //         />
  //         <br />
  //         <label htmlFor="age">Age:</label>
  //         <input
  //           type="text"
  //           id="age"
  //           name="employee-age"
  //           onChange={this.updateAge}
  //           value={this.state.age}
  //           placeholder={this.updatePerson.firstname}
  //         />
  //         <br />
  //         <label htmlFor="job">Job:</label>
  //         <input
  //           type="text"
  //           id="job"
  //           name="employee-job"
  //           onChange={this.updateJob}
  //           value={this.state.job}
  //           placeholder={this.updatePerson.firstname}
  //         />
  //         <div className="add-button-wrapper">
  //           <input type="hidden" name="uuid" value={this.props.myid} />
  //           <br />
  //           <button type="submit" className="add-button">
  //             Update details
  //           </button>
  //         </div>
  //       </form>
  //       <button className="add-button" onClick={this.goHome}>
  //         Return Home
  //       </button>
  //       <p>{this.props.myid}</p>
  //     </div>
  //   );
  // }
}
