import React, { Component } from "react";
import me from "../Resume/CVcomponents/me.jpg";
import Education from "../Resume/CVcomponents/education";
import Experience from "../Resume/CVcomponents/experience";
import Skills from "../Resume/CVcomponents/skills"
import { Grid, Cell } from "react-mdl";
class Resume extends Component {
    render() {
        return (
            <div>
                <Grid className="resume-grid">
                    <Cell col={4} className="resume-left">
                        <div className="resume-left-up">
                            <img src={me} alt="poza de profil" className="profile-picture" />
                            <h2 style={{ fontFamily: "Lemonada" }}>
                                Czako Ramona-Stela
                            </h2>
                        </div>
                        <div className="resume-left-down">

                            <h4>Junior Developer</h4>
                            <hr /*style={{ borderTop: " 3px solid rgb(24, 0, 130)", width: " 50%" }}*/ />
                            <p>
                                Seasoned professional with over 15 years of experience in medical field.
                                I am driven and enthusiastic about pursuing a career in IT
                        </p>
                            <hr /*style={{ borderTop: " 3px solid rgb(24, 0, 130)", width: " 90%" }}*/ />
                            <h5>Adress</h5>
                            <p>Cluj-napoca,nr.........</p>
                            <h5>Phone</h5>
                            <p>0746/xxx xxx</p>
                            <h5>Email</h5>
                            <p>drvizitiuramona@gmail.com</p>
                            <h5>Web</h5>
                            <p>www.doctorBooBoo.com</p>
                            <hr />
                        </div>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2020}
                            endYear={2020}
                            schoolName="Scoala informala de IT Cluj-Napoca"
                            schoolDescription="Curs Front-end Web Development iulie 2020"
                        />
                        <Education
                            startYear={2020}
                            endYear={2020}
                            schoolName="Scoala informala de IT Cluj-Napoca"
                            schoolDescription="Curs Intro IT mai 2020"
                        />

                        <Education
                            startYear={2011}
                            endYear={2016}
                            schoolName="UMF'Iuliu Hatieganu' Cluj-Napoca"
                            schoolDescription="Medic rezident pediatrie in Clinica Pediatrie 3"
                        />

                        <Education
                            startYear={2005}
                            endYear={2011}
                            schoolName="UMF'Iuliu Hatieganu' Cluj-Napoca"
                            schoolDescription="student-Universitate medicala de prestigiu european"
                        />
                        <hr />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2020}
                            endYear={2020}
                            jobName="Scoala informala de IT Cluj-Napoca"
                            jobDescription="Am inceput cursurile de IT intro si am urmat ulterior Curs Front-end Web Development din iulie 2020 pana in decembrie 2020"
                        />
                        <Experience
                            startYear={2017}
                            endYear={2020}
                            jobName="medic specialist pediatrie"
                            jobDescription="Centrul de Pediatrie Cluj-Napoca"
                        />
                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="medic rezident pediatrie"
                            jobDescription="Clinica Pediatrie 3 Cluj-Napoca"
                        />
                        <hr />
                        <h2>Skills</h2>
                        <Skills
                            skill="HTML"
                            progress={90}
                            skillProgress="90%"

                        />
                        <Skills
                            skill="CSS"
                            progress={90}
                            skillProgress="90%"
                        />
                        <Skills
                            skill="Java Script"
                            progress={80}
                            skillProgress="80%"
                        /><Skills
                            skill="React"
                            progress={80}
                            skillProgress="80%"

                        />


                    </Cell>
                </Grid >
            </div >
        )
    }
}
export default Resume;