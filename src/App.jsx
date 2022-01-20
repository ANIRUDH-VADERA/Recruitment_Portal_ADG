import React, { Component } from "react";
import { Route } from "react-router-dom";
import Buttons from "./Components/Buttons/Buttons";
// Styling
import "./App.css";
import Login from "./Components/Login/Login";
import Bio from "./Components/Bio/Bio";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
class App extends Component {
  render() {
    return (
      <div>
        <Buttons />
        <CreateAccount />
        <Login />
        <Bio />
      </div>
    );
  }
}
export default App;
