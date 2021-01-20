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
                    I have a strong background in biological research, including wet lab work and computational analysis. I'm particularly interested in genetics, computational biology, and data science.
                </div>
                <div className="mainBreak" />
                <div className="mainBox">
                    <h1>MIT Department of Biological Engineering - Essigmann Lab</h1>
                    <span className="subheading">Undergraduate Researcher, Data Analyst, Programmer</span> | <span className="subheading">September 2019 - current</span> | <span className="subheading">Cambridge, MA</span><br /><br />
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            skills
                        </div>
                        <div className="flexBox-b">
                            <div className="flexSpan">Python</div>
                            <div className="flexSpan">Biopython</div>
                            <div className="flexSpan">pandas</div>
                            <div className="flexSpan">data visualization</div>
                            <div className="flexSpan">data parsing</div>
                        </div>
                    </div>
                    <br />
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            projects
                        </div>
                        <div className="flexBox-b">
                            <b>Mutational spectrum analysis</b>: Coded a pipeline to enable efficient processing and visualization of mutational spectrum data, which is frequently used in the lab.
                            <br /><br />
                            <b>Monte Carlo simulations</b>: Ran Monte Carlo simulations in order to advise research decisions, such as how many data points needed to be collected to determine the presence of a mutational signature. Presented findings to the group in order to be incorporated into future research decisions.
                            <br /><br />
                            <b>SARS-CoV2 mutational analysis</b>: Processed 500+ SARS-CoV2 genomes from a database and used Biopython to align sequences and retrieve mutational data. Currently analyzing mutational data to investigate the possible chemical processes that drive mutations in SARS-CoV2.
                        </div>
                    </div>
                </div>
                <div className="mainBreak" />
                <div className="mainBox">
                    <h1>Wave Learning Festival</h1>
                    <span className="subheading">Data Analyst</span> | <span className="subheading">September 2020 - current</span> | <span className="subheading">remote</span><br /><br />
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            skills
                        </div>
                        <div className="flexBox-b">
                            <div className="flexSpan">Python</div>
                            <div className="flexSpan">Excel</div>
                            <div className="flexSpan">data visualization</div>
                            <div className="flexSpan">data parsing</div>
                        </div>
                    </div>
                    <br />
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            projects
                        </div>
                        <div className="flexBox-b">
                            <b>Student registration analysis</b>: Analyzed student registration data, focusing on satisfaction with our course assignment process. Used this data to optimize algorithms for how students were assigned to classes.
                            <br /><br />
                            <b>Analysis of socioeconomic status in different school districts</b>: Investigated school districts in target cities to determine which districts would benefit the most from a partnership with our organization, focusing on the Midwest. Worked closely with growth and outreach teams.
                            <br /><br />
                            <b>Data cleaning</b>: Helped the team organize and clean locational and registration data from registered students for further use using web scraping and Python scripts.
                            <br /><br />
                            <b>Course popularity analysis</b>: Conducted in-depth research into the popularity of different courses offered by the organization. Used this information to advise organizational leads on which subjects were popular and may garner more student interaction.
                        </div>
                    </div>
                </div>
                <div className="mainBreak" />
                <div className="mainBox">
                    <h1>Summer Science Program in Biochemistry</h1>
                    <span className="subheading">Student Participant</span> | <span className="subheading">June 2018 - August 2018</span> | <span className="subheading">West Lafayette, IN</span><br /><br />
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            skills
                        </div>
                        <div className="flexBox-b">
                            <div className="flexSpan">protein modeling</div>
                            <div className="flexSpan">protein purification</div>
                            <div className="flexSpan">enzyme assays</div>
                            <div className="flexSpan">kinetics analysis</div>
                            <div className="flexSpan">gel electrophoresis</div>
                        </div>
                    </div>
                    <br />
                    <div className="mainFlex">
                        <div className="flexBox-a">
                            projects
                        </div>
                        <div className="flexBox-b">
                            <b>Analysis of enzyme kinetics</b>: Analyzed kinetics of enzyme Cdc14 in <i>Fusarium oxysporum</i>. Ran assays and used data to model Michaelis-Menten curves.
                            <br /><br />
                            <b>Inhibitor testing and optimization</b>: Worked with multiple potential Cdc14-inhibiting compounds to measure IC50 curves and method of inhibition. Then optimized inhibitors using the Molecular Operating Environment (MOE) software.
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

export default Science;