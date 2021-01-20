import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import NavBar from "./modules/NavBar.js";

import "./utilities.css";

import Design from "./pages/Design.js";
import Science from "./pages/Science.js";

import ProjectSingularity from "./pages/Portfolio/ProjectSingularity.js";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <NavBar />
        <Router>
          <Design 
            path="/design"
          />
          <ProjectSingularity
            path="/design/singularity"
          />

          <Science 
            path="/science"
          />
          <Skeleton
            path="/"
          />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
