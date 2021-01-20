import React, { Component } from "react";
import "./Design.css";
import { Link } from "@reach/router";

import preview1 from "../../Images/singularity_preview.jpg"

class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = "chelsea chen | design";
    }

    render() {
        return (
            <div>
                <div className="headerBlurb">
                    My designs focus on simple, minimalistic aesthetics and enhancing user experience. Please email me if you'd like a PDF version of my portfolio!
                </div>
                <div className="mainBreak" />
                
                <div className="designCover" style={{backgroundImage: `url(${preview1})`}}>
                </div>
                <div className="designBox">
                    <div className="designPreview">
                        <Link to="/design/singularity" className="link">singularity web design</Link>
                    </div>
                    <div className="designText">
                        <a href="https://singularity-app.herokuapp.com/">website</a> <a>january 2021</a><br />
                        <a>adobe xd</a> <a>adobe illustrator</a> <a>react.js</a> <a>html/css</a><br />
                        Singularity is a collaborative event planning app that I designed and coded with friends for MIT's web.lab web development class/competition in January 2021.
                    </div>
                </div>

                <div className="footer">
                <hr />
                site coded by <b>xi chen</b>.<br />
                <b>email me</b> chxchen at mit.edu
                </div>
            </div>
        )
    }
}

export default Design;