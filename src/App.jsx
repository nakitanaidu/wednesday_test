import * as React from "react";
import "./App.css";
import ViewAll from "./components/ViewAll";
import ViewOrder from "./components/ViewOrder";
// import Display from "./components/Display";
import { Router } from "@reach/router";
// import EditEmployee from "./components/Edit";
import GlobalNav from "./components/GlobalNav";
import Test from "./components/Test";
import Add from "./components/Add";
import AddOrder from "./components/AddOrder";


export default class App extends React.Component {

  

  render() {
    return (
      <React.Fragment>
        <GlobalNav />
        <Router>
          <ViewAll path="/" />
          <Add path="/addemployee"/>
          {/* <Edit path="/editemployee/:uuid" /> */}
          {/* <EditEmployee path="/editemployee" /> */}
          {/* <Display path="/" /> */}
          <Test path="/test/:myid" />
        </Router>
        <Router>
          <ViewOrder path="/order"/>
          <AddOrder path="/addorder"/>
        </Router>
      </React.Fragment>
    );
  }
}
