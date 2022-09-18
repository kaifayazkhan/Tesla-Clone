import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import TextContent1 from './TextContent_1';


const WrapContainerData = [
    {
        id: 1,
        title: '360°',
        para: 'Rear, side and forward-facing cameras provide maximum visibility',
        para1: 'Degrees of Visibility'
    },
    {
        id: 2,
        title: '250 m',
        para: 'Powerful visual processing at up to 250 meters of range',
        para1: 'of Powerful Visual Processing'
    },
    {
        id: 3,
        title: '🏁',
        para: 'Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking',
        para1: 'Tesla Vision'
    },
];
const AutoPilotVision = () => {
    return (
        <>
            <Container>
                <Fade bottom>
                    <WrapData>
                        {
                            WrapContainerData.map((curEle) => {
                                return <div className="text-cont" key={curEle.id}>
                                    <h1>{curEle.title}</h1>
                                    <p className="firstPara">{curEle.para}</p>
                                    <p className="secondPara">{curEle.para1}</p>
                                </div>
                            })
                        }
                    </WrapData>
                </Fade>
            </Container>
            <Fade bottom>
                <TextContent1
                    background={"white"}
                    textcolor={"black"}
                    topHeading={"Autopilot"}
                    mainHeading={"Future of Driving"}
                    para={"Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S."}
                />
            </Fade>
        </>
    )
}

export default AutoPilotVision;

const Container = styled.div`
    width:100%;
    height:135vh;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    background-image:url('/images/Autopilot-Hero-Vision-Desktop.jpg');
    position:relative;
    display:flex;
    align-items:center;
    @media (max-width:840px){
        height:100vh;
        justify-content:center;
    }
`

const WrapData = styled.div`
    padding-left: 4rem;
    display:flex;
    flex-direction:column;
    .text-cont{
        margin-top:2rem;
    }
    .firstPara{
        display:block;
    }
    .secondPara{
        display:none;
    }
    @media (max-width:840px){
        flex-direction:row;
        justify-content:center;
        text-align:center;
        position:absolute;
        left:0;
        bottom:10%;
        .text-cont{
            margin-left:2rem;
        }
        .firstPara{
            display:none;
        }
        .secondPara{
            display:block;
        }
    }
    @media (max-width:500px){
        padding:0;
        .text-cont{
            margin-left:0rem;
        }
        h1{
            font-size:1.2rem;
        }
    }
`