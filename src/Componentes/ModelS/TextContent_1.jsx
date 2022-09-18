import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Fade from 'react-reveal/Fade';

const TextContent_1 = ({ background, textcolor, topHeading, mainHeading, para }) => {
    return (
        <Fade bottom>
            <Container bg={background}>
                <LeftCont color={textcolor}>
                    <p >{topHeading}</p>
                    <h1>{mainHeading}</h1>
                    {
                        window.innerWidth > 840 && <Button title={"Order Now"} borderClr={textcolor} background={textcolor} textColor={textcolor} hoverText={background} width={"200px"} />
                    }
                </LeftCont>
                <RightCont color={textcolor}>
                    <p>{para}</p>
                    {
                        window.innerWidth <= 840 && <Button title={"Order Now"} borderClr={textcolor} background={textcolor} textColor={textcolor} hoverText={background} width={"200px"} />
                    }
                </RightCont>
            </Container>
        </Fade>
    )
}

export default TextContent_1;

const Container = styled.div`
    widht:100%;
    background-color:${props => props.bg};
    padding:10vh 10vw;
    display:flex;
    @media (max-width:840px){
        flex-direction:column;
        padding-top:20px;
        padding-bottom:5vh;
    }
`
const LeftCont = styled.div`
    flex-basis:40%;
    h1,p{
        color: ${props => props.color};
    }
    h1{
        margin - top:.5rem;
        margin-bottom:1rem;
    }
    @media (max-width:800px){
            flex - basis:100%;
    }
`
const RightCont = styled.div`
    flex-basis:60%;
    p{
        color:${props => props.color};
    }
    @media (max-width:800px){
        flex - basis:100%;
    }
`