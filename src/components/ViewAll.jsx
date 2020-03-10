import React, { Component } from "react";
import Axios from "axios";
import Display from "./Display";
import "../css/buttons.css";

export default class ViewAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount = e => {
    
this.getData()

  };

  getData = e=> {
    Axios.get("http://localhost:4000/api/users").then(res => {
      console.table(res.data);
      this.setState({
        users: res.data
      });
    });
  }
  // removePerson = evt => {
  //   var index = evt.target.getAttribute("data-uuid");
  //   console.table(${index});
  //   // Axios.delete(`http://localhost:4000/api/users/${index}`).then(res => {
  //   //   console.log(res.data);
  //   // });
  // };

  render() {
    return (
      <React.Fragment>
        <div>
          <ul>
            {console.log(this.state.users)}
            {this.state.users.map((ele, i) => {
              return (
                <Display
                  key={i}
                  first_name={ele.first_name}
                  last_name={ele.last_name}
                  age={ele.age}
                  job={ele.job}
                  
                  _id={ele._id}
                  refreshUser={this.getData}
                  updatePerson={this.updatePerson}
                  addPerson={this.addPerson}
                />
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}


