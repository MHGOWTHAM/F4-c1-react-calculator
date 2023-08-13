
import React from "react";

import Navbar from "./Components/Navbar";
import About from "./Components/about";
import Section from "./Components/section";

const sec =[
     {
          title:"Skills",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum Dedicated and innovative Software Developer with 4of experience designing, developing, and deploying high-quality software solutions. Proficient in Programming Languages, Technologies, Tools,I am passionate about creating efficient, maintainable, and scalable code. Through a deep understanding of software engineering principles"     
     },
     {
          title:"Experience",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum Dedicated and innovative Software Developer with 4of experience designing, developing, and deploying high-quality software solutions. Proficient in Programming Languages, Technologies, Tools,I am passionate about creating efficient, maintainable, and scalable code. Through a deep understanding of software engineering principles"          
     },
     {
          title:"Education",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum Dedicated and innovative Software Developer with 4of experience designing, developing, and deploying high-quality software solutions. Proficient in Programming Languages, Technologies, Tools,I am passionate about creating efficient, maintainable, and scalable code. Through a deep understanding of software engineering principles"          
     }
]


const App = () => {
     return (
          <div>
               <Navbar/>
               <About/>
               {
                    sec.map((value)=>{
                         <Section title={value.title} description={value.desc} />
                    })
               }
          </div>
     )
}

export default App;