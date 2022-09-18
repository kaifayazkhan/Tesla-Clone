import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Fade from 'react-reveal/Fade';
const ModelSPageButtons = () => {
    return (
        <>
            <Container>
                <Fade bottom>
                    <ButtonPage>
                        <h1>Model S</h1>

                        <div className="button1">
                            <Button title={"Order Now"} borderClr={"black"} background={"black"} textColor={"black"} hoverText={"white"} width={"200px"} />
                        </div>

                        <div className="button2">
                            <Button title={"Compare Now"} borderClr={"black"} background={"black"} textColor={"black"} hoverText={"white"} width={"200px"} />
                        </div>
                    </ButtonPage>
                </Fade>

                <ImageBox>
                    <img src="/images/ModelSPage.jpg" alt="Model S Image" />
                </ImageBox>

            </Container>
        </>
    )
}

export default ModelSPageButtons;

const Container = styled.div`
    width:100%;
    background:white;
    display:flex;
    justify-content: space-between;
    padding-top:10vh;
    ${'' /* align-items: center; */}
    @media (max-width:500px){
        flex-direction: column;
    }
`
const ButtonPage = styled.div`
    margin-left:10vw;
    flex-basis:30%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    h1{
        color:black;
    }
    .button1,.button2{
        margin-top:1rem;
    }
    @media (max-width:840px){
        margin-left:5vw;
        h1{
            margin-bottom:1rem;
        }
    }
    @media (max-width:500px){
        flex-basis:100%;
        margin:0 1rem;
        text-align:center;
        margin-bottom:0rem;
    }
`
const ImageBox = styled.div`
    flex-basis:50%;
    ${'' /* text-align:right; */}
    img{
        width:100%;
    }
    @media (max-width:500px){
        flex-basis:100%;
    }
`
