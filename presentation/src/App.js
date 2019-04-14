import React, { Component } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import { BrowserRouter, Route } from "react-router-dom";
import "./components/styles/style.scss";

class App extends Component {
  render() {
    return (<>
      <Nav />
      <Landing />
    </>);
  };
};

export default App;

