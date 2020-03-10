import React, { Component } from "react";
import Axios from "axios";
import DisplayOrder from "./DisplayOrder";

export default class ViewOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };
  }

  componentDidMount = e => {
    Axios.get("http://localhost:4000/api/orders").then(res => {
      console.table(res.data);
      this.setState({
        orders: res.data
      });
    });
  };

  removeOrder = evt => {
    var index = evt.target.getAttribute("data-uuid");
    console.table(this.state.orders);
    Axios.delete(`http://localhost:4000/api/orders/${index}`).then(res => {
      console.table(res.data);
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <ul>
            {console.log(this.state.orders)}
            {this.state.orders.map((ele, i) => {
              return (
                <DisplayOrder
                  key={i}
                  food={ele.food}
                  drink={ele.drink}
                  dessert={ele.dessert}
                  _id={ele._id}
                  removeOrder={this.removeOrder}
                  addOrder={this.addOrder}
                />
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
