import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = ({ title, des, backgroundImage, leftBtnText, rightBtnText }) => {
    return (
        <Wrap bgImage={backgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{des}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <ButtonLeft>{leftBtnText}</ButtonLeft>
                        {rightBtnText && <ButtonRight>{rightBtnText}</ButtonRight>}
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;//vertical-align
    align-items:center;//horizontal-align
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    width:100%;
    padding-top:15vh;
    text-align:center;
`

const Buttons = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:10px;
    @media (max-width:768px) {
        flex-direction:column;
    }
`

const ButtonLeft = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:200px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:13px;
    margin:8px;
    cursor:pointer;
    font-weight:600;
`

const ButtonRight = styled(ButtonLeft)`
    background-color:white;
    color:black;
    opacity:0.65;
`

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    cursor:pointer;
    animation:animateDown infinite 1.5s;
`