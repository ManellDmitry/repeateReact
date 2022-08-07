import React from "react"
import Footer from "./component/Footer"
import Header from "./component/Header"
import {Button, Link} from "./component/Button"


const navLinks= [
  {id:"1",label: "Our work"},
  {id:"2",label: "What we do"},
  {id:"3",label: "About us"},
  {id:"4",label: "Get in touch"}
]


function App() {
  const handleButtonClick=()=>{

  }
  const handleLinkClick=()=>{
    
  }
  
  return(
    <div>
     <Header links={navLinks}/>

<div style={{display:"flex"}}>
     <Button label="see all works" handleClick={handleButtonClick}/>
     <Link label="get in touch" handleClick={handleLinkClick}/>
</div>

      <Footer/>
    </div>
  )
}

export default App
