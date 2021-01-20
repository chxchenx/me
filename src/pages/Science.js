import React, { Component } from "react";
import "./Science.css";

class Science extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = "chelsea chen | science";
    }

    render() {
        return (
            <div>
                <div className="headerBlurb">
                    I have a strong background in biological research, including wet lab work and computational analysis. I'm particularly interested in genetics and computational biology.
                </div>
            </div>
        )
    }
}

export default Science;