import React from "react";
import "../style.css"
import pic from "../images/pic.png"

const About = () =>{
    return (
        <div className="aboutme">
            <h1>About Me</h1>
            <img src={pic} alt="img" width="200" height="200" />
            <p>Dedicated and innovative Software Developer with 4of experience designing, developing, 
                and deploying high-quality software solutions. Proficient in Programming Languages, Technologies, Tools,
                 I am passionate about creating efficient, maintainable, and scalable code. Through a deep understanding of 
                 software engineering principles, I have successfully contributed to 4 projects across Industry/Domain,
                  consistently delivering value by translating complex requirements into functional applications. 
                A collaborative team player with a commitment to continuous learning and staying current with emerging technologies.
            </p>
        </div>
    )
}

export default About;