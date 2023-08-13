import React from "react";
import "../style.css"
import pic from "../images/pic.png"

const About = () =>{
    return (
        <div className="aboutme">
            <h1>About Me</h1>
            <img src={pic} alt="img" width="200" height="200" />
            <p>Aspiring and motivated software developer with a passion for Java programming and a strong desire to contribute to innovative software solutions. Eager to apply my educational background in computer science and my self-motivated learning journey to real-world projects. My goal is to leverage my problem-solving skills and creativity to make a positive impact in the field of software development.</p>
        </div>
    )
}

export default About;