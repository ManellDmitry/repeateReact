import React from "react";
import styled from "styled-components";

export const Container=styled.div`
width: 320px;
margin: 0 auto;
padding: 0 10px;
@media screen and (min-width: 679px){
  width: 679;
  padding: 0 20px;
}
@media screen and (min-width: 1200px){
  width: 1200px;
  width: 0 30px;
}
`