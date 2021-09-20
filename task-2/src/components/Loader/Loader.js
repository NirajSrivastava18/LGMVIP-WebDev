import React from "react";
import styled, { keyframes } from "styled-components";

const slidetoSlide = keyframes`
  0%{
    background:aqua;
    box-shadow: 0 0 10px aqua;
    width:10px;
    left:0;
  }
  25%{
    background:aqua;
    box-shadow: 0 0 10px aqua;
    width:100px;
    left:0;
  }
  50%{
    background:greenyellow;
    box-shadow: 0 0 10px greenyellow;
    width:10px;
    left:90px;
  }
  75%{
    background:aqua;
    box-shadow: 0 0 10px aqua;
    width:100px;
    left:0;
  }
  100%{
    background:aqua;
    box-shadow: 0 0 10px aqua;
    width:10px;
    left:0;
  }  
  

`;

const LoadingSlider = styled.div`
  position: absolute;
  margin-top: 21%;
  margin-left: 47%;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: aqua;
  box-shadow: 0 0 10px aqua;
  animation: ${slidetoSlide} 2s ease infinite;
`;
function Loader() {
  return <LoadingSlider />;
}
export default Loader;
