
import React from "react";

import Navbar from "./Components/Navbar";
import About from "./Components/about";
import Section from "./Components/section";

const sec =[
     {
          title:"Skills",
          desc:"Java, MySQL, Spring Boot, "
     },
     {
          title:"Education",
          desc:"Recent graduate with a Bachelor's degree in Computer Science. Proficient in Java programming language, with a focus on object-oriented concepts. Solid understanding of data structures and algorithms. Enthusiastic learner, continuously exploring new technologies and programming paradigms."     
},
     {
          title:"Experience",
          desc:"Programming Languages: Java, Version Control: Git, Tools: IntelliJ IDEA, Eclipse, Basic understanding of HTML, CSS, and JavaScript"          
     }
]


const App = () => {
     return (
          <div>
               <Navbar/>
               <About/>
               {
                    sec.map((value)=>{
                        return <Section title={value.title} desc={value.desc} />
                    })
               }
          </div>
     )
}

export default App;