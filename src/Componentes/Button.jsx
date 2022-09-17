import React from 'react';
import styled from 'styled-components';

const Button = ({ title, borderClr, background, textColor, hoverText, width, tabletWidth }) => {
  return (
    <ButtonData
      borderColor={borderClr}
      color={textColor}
      hoverBg={background}
      hoverTextColor={hoverText}
      width={width}
      tabSize={tabletWidth}
    >
      {title}
    </ButtonData>
  )
}

export default Button;
const ButtonData = styled.div`
    border:2px solid ${props => props.borderColor};
    color:${props => props.color};
    width:${props => props.width};
    transition:0.4s ease-in;
    cursor:pointer;
    padding:8px 0;
    border-radius:3px;
    text-align:center;
    :hover{
        background-color:${props => props.hoverBg};
        color:${props => props.hoverTextColor};
    }
    @media (max-width:850px){
        width:${props => props.tabSize};
        margin-top:25px;
    }
    @media (max-width:500px){
        width:95%;
    }
`