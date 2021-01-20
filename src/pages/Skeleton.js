import React, { Component } from "react";
import NavBar from "../modules/NavBar.js";
import { Link } from "@reach/router";

import "../utilities.css";
import "./Skeleton.css";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      document.title = "chelsea chen";
  }

  render() {
    return (
      <>
        <div className="headerBlurb">
        Hi! I'm <span className="name">Chelsea Chen</span>, a sophomore at the Massachusetts Institute of Technology passionate about science, tech, and design.
        </div>

        <div className="linkBoxContainer">
          <div className="linkBox"><a href="/">resume</a></div>
          <div className="linkBox"><a href="/">portfolio</a></div>
        </div>
        <div className="mainBreak" />
        <div className="mainBox">
          <div className="mainFlex">
            <div className="flexBox-a">
              education
            </div>
            <div className="flexBox-b">
              <div className="flexSpan-full">Massachusetts Institute of Technology</div>
              <br />
              Class of 2023 | B.S. Candidate
              <br /><br />
              <b>Major:</b> <span className="highlight">Computer Science & Molecular Biology</span>
              <br />
              <b>Minor:</b> <span className="highlight">Statistics & Data Science</span>, <span className="highlight">Design</span>
              <br />
              <b>Concentration*</b> <a href="https://cmsw.mit.edu/education/comparative-media-studies/undergraduate/">CMS</a>: Games and Interactive Media
              <br /><br />
              <i>* Concentrations at MIT are a way for undergraduates to study a humanities subject in more detail. I will be focusing on game design and visual media for my concentration.</i>
            </div>
          </div>
        </div>
        <div className="mainBreak" />
        <div className="mainBox">
          <div className="mainFlex">
            <div className="flexBox-a">
              skills
            </div>
            <div className="flexBox-b">
              <b>Design</b><hr />
              <div className="flexSpan">Adobe XD</div>
              <div className="flexSpan">GIMP</div>
              <br /><br />
              <b>Lab Work</b><hr />
              <div className="flexSpan">protein modeling</div>
              <div className="flexSpan">protein purification</div>
              <div className="flexSpan">gel electrophoresis</div>
              <div className="flexSpan">enzyme assays</div>
              <div className="flexSpan">kinetics analysis</div>
              <br /><br />
              <b>Programming</b><hr />
              <div className="flexSpan">Python</div>
              <div className="flexSpan">Java</div>
              <div className="flexSpan">HTML/CSS</div>
              <div className="flexSpan">Javascript</div>
              <div className="flexSpan">React.js</div>
            </div>
          </div>
        </div>
        <div className="mainBreak" />
        <div className="mainBox">
          <div className="mainFlex">
            <div className="flexBox-a">
              publications
            </div>
            <div className="flexBox-b">
              <div className="flexSpan-full"><a>Creating novel fungicides by targeting Cdc14 in Fusarium oxysporum</a></div>
              <br />
              Chen, X., Uluegeci, E.S. | Advised by Mark C. Hall and Martha Oakley
            </div>
          </div>
        </div>
        <div className="mainBreak" />
        <div className="mainBox">
          <div className="mainFlex">
            <div className="flexBox-a">
              coursework
            </div>
            <div className="flexBox-b">
              <i>Italicized courses will be taken Spring 2021.</i>
              <br /><br />
              <b>Computer Sciences</b><hr />
              <div className="flexSpan">6.009 Programming</div>
              <div className="flexSpan">6.042 Math for CS</div>
              <div className="flexSpan">6.148 Web Development</div>
              <div className="flexSpan"><i>6.006 Intro to Algorithms</i></div>
              <br /><br />
              <b>Life Sciences</b><hr />
              <div className="flexSpan">5.12 Organic Chemistry</div>
              <div className="flexSpan">7.03 Genetics</div>
              <div className="flexSpan">20.110 Thermodynamics</div>
              <div className="flexSpan">24.06 Bioethics</div>
              <div className="flexSpan"><i>7.05 Biochemistry</i></div>
              <br /><br />
              <b>Data Science</b><hr />
              <div className="flexSpan">6.0002 Intro to Data Science</div>
              <div className="flexSpan"><i>18.600 Statistics</i></div>
              <br /><br />
              <b>Design</b><hr />
              <div className="flexSpan"><i>4.021 Design Studio</i></div>
              <div className="flexSpan"><i>CMS.301 Game Design</i></div>
            </div>
          </div>
        </div>

        <div className="footer">
          <hr />
          site coded by <b>xi chen</b>.<br />
          <b>email me</b> chxchen at mit.edu
        </div>
      </>
    );
  }
}

export default Skeleton;
