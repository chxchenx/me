import React, { Component } from "react";
import { Link } from "@reach/router";
import "./NavBar.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="container">
                <div className="title u-inlineBlock">chelsea chen</div>
                <div className="linkContainer u-inlineBlock">
                    <Link to="/">about.</Link>
                    <Link to="/design">design.</Link>
                    <Link to="/science">science.</Link>
                </div>
            </nav>
        )
    }
}

export default NavBar