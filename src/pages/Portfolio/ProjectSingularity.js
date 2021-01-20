import React, { Component } from "react";
import "./Portfolio.css";
import cover from "../../Images/singularity_preview.jpg"
import prof from "../../Images/singularity_prof.png"

class ProjectSingularity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = "chelsea chen | design | testproject";
    }

    render() {
        return (
            <div>
                <div className="headerBlurb">
                    <a href="https://singularity-app.herokuapp.com/"><b>Singularity</b></a> is a collaborative event planning app that I designed and coded with friends for MIT's web.lab web development class/competition in January 2021.
                </div>
                <div className="projectCover">
                    <img src={cover} />
                    <img src={prof} />
                </div>

                <div className="mainBreak" />
                <div className="mainBox">
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            project overview
                        </div>
                        <div className="flexBox-b">
                            <b>timeline</b><hr />
                            <div className="flexSpan">jan. 4 - jan. 29, 2021</div>
                            <br /><br />
                            <b>role</b><hr />
                            <div className="flexSpan">frontend developer</div>
                            <div className="flexSpan">fullstack developer</div>
                            <div className="flexSpan">artist & designer</div>
                            <br /><br />
                            <b>team</b><hr />
                            <div className="flexSpan">xi chen (me)</div>
                            <div className="flexSpan">viktoriya tabunshchyk</div>
                        </div>
                    </div>
                </div>

                <div className="mainBreak" />
                <div className="mainBox">
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            tools
                        </div>
                        <div className="flexBox-b">
                            <b>Design & Art</b><hr />
                            <div className="flexSpan">Adobe XD</div>
                            <div className="flexSpan">Adobe Illustrator</div>
                            <div className="flexSpan">Procreate</div>
                            <br /><br />
                            <b>Programming</b><hr />
                            <div className="flexSpan">HTML/CSS</div>
                            <div className="flexSpan">React.js</div>
                        </div>
                    </div>
                </div>

                <div className="mainBreak" />
                <div className="mainBox">
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            brief
                        </div>
                        <div className="flexBox-b">
                            <b>Singularity</b> is an original app concept that my team came up with in order to make planning events with friends more fun, simple, and convenient. Singularity is aimed at young adults and the casual user, who might appreciate a clean aesthetic but not have the time to use a more complicated task managing system. It also seeks to reduce common problems that arise during casual event planning with friends.
                            <br /><br />
                            <b>My Contribution</b><hr />
                            I worked as a fullstack developer, focusing on frontend, and designer and artist for this project in collaboration with my team. I implemented most CSS styling and designed all artwork and logos, and also contributed to database management and deployment of the site.
                        </div>
                    </div>
                </div>

                <div className="mainBreak" />
                <div className="mainBox">
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            user research
                        </div>
                        <div className="flexBox-b">
                            Our team polled 300+ users in our target demographic using social media sites about common problems that arose when planning events and used these comments to solidify plans for Singularity. We attempted to address these issues, including lack of accountability and difficulty finding consolidated information.
                        </div>
                    </div>
                </div>

                <div className="mainBreak" />
                <div className="mainBox">
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            conclusion
                        </div>
                        <div className="flexBox-b">
                            <b>Next Steps</b><hr />
                            This project is still underway! Check back soon.
                            <br /><br />
                            <b>Takeaways</b><hr />
                            This project is still underway! Check back soon.
                        </div>
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

export default ProjectSingularity;