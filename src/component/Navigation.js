import React from "react";
import styled from "styled-components";

const List= styled.ul`
display: flex;
`
const Item= styled.li`
margin-right: 30px;
`

function Navigation({links}){
  const handleItemClick=()=>{
  }
  const handleLinkClick=(e)=>{
    e.preventDefault()
  }
  const handleLinkMouseEnter= (e)=>{

  }
  return(
    <nav>
        <List>
          {links && links.map(({id,label}) => 
            (<Item key={id} onClick={handleItemClick}>
              <a href="/"  onClick={handleLinkClick} 
                           onMouseEnter={handleLinkMouseEnter}>
                {label}
              </a>
            </Item>)    
          )}
        </List>
      </nav>
    )
}

export default Navigation