import React from "react";
import styled from "styled-components";

const commonStyles=`
background-color: #1F1F1F;
color: #fff;
font-size: 17px;
line-height: 1.56;
letter-spacing: 0.2px;
padding: 8px 32px;
border-radius: 4px;
:hover{
    background-color:  #fff;
    color: #000;
    transition: all 0.5s;
}
`
const StyledButton= styled.button`
${commonStyles}
`
const StyledLinkButton= styled.a`
${commonStyles}
text-decoration: underline;
`
export  function Button({type,label, handleClick}){
    return(
        <StyledButton type={type || "button"} onClick={handleClick}>{label}</StyledButton> 
    )
}

export function Link({path,label,handleClick}){
    return(
        <StyledLinkButton href={path || ""} onClick={handleClick}>{label}</StyledLinkButton>
    )
}