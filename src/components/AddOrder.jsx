import React, { Component } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";

export default class AddOrder extends Component {

    constructor(props) {
        super(props);
        this.state = { order: {} };
        // get handle on the DOM element
        this.myRef = React.createRef();
      }

  goHome = e => {
    navigate(`/order`);
  };

  addOrder = e => {
    e.preventDefault();
    var food = e.target.elements["food"].value;
    var drink = e.target.elements["drink"].value;
    var dessert = e.target.elements["dessert"].value;
    

    // POST REQUIRES EXTRA PARAMETERS AND THEY NEED TO MATCH WITH MONGODB FORMAT (userModel, UserScheme in users-model.js)

    Axios.post(`http://localhost:4000/api/users`, {
      food: food,
      drink: drink,
      dessert: dessert
    }).then(res => {
      console.log(res.data);
      alert("USER ADDED:");
    });
  };

  render() {
    // var { food, drink, dessert } = this.state.order;
    return (
      <div className="add-form-wrapper">
        <h1>Add Order</h1>
        <form className="special" onSubmit={this.addOrder} ref={this.myRef}>
        <label htmlFor="food">Food:</label>
            <input type="text" id="food" name="food" required />
            <label htmlFor="drink">Drink:</label>
            <input type="text" id="drink" name="drink" required />
            <label htmlFor="age">Dessert:</label>
            <input type="text" id="dessert" name="dessert" required />
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
