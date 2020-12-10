import React, { Component } from "react";
import me from "../me.jpg"
import Education from "../components/CV/education"
import { Grid, Cell } from "react-mdl";
class Resume extends Component {
    render() {
        return (
            <div>
                <Grid className="resume-grid">
                    <Cell col={4}>
                        <div className="resume-left">
                            <img src={me} alt="poza de profil" className="profile-picture" />
                        </div>
                        <h2>
                            Czako Ramona-Stela
                        </h2>
                        <h4>Junior Developer</h4>
                        <hr />
                        <p>
                            Seasoned professional with over 15 years of experience in medical field.
                            I am driven and enthusiastic about pursuing a career in IT
                        </p>
                        <hr />
                        <h5>Adress</h5>
                        <p>Cluj-napoca,nr.........</p>
                        <h5>Phone</h5>
                        <p>0746/xxx xxx</p>
                        <h5>Email</h5>
                        <p>drvizitiuramona@gmail.com</p>
                        <h5>Web</h5>
                        <p>www.doctorBooBoo.com</p>
                        <hr />
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>

                        <Education
                            startYear={2005}
                            endYear={2011}
                            schoolName="UMF'Iuliu Hatieganu' Cluj-Napoca"
                            schoolDescription="student-Universitate medicala de prestigiu european"
                        />
                        <Education
                            startYear={2011}
                            endYear={2016}
                            schoolName="UMF'Iuliu Hatieganu' Cluj-Napoca"
                            schoolDescription="Medic rezident pediatrie in Clinica Pediatrie 3"
                        />


                    </Cell>
                </Grid>
            </div >
        )
    }
}
export default Resume;