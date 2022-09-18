import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import DummyLine from './DummyLine';
const FeaturesData = [
    {
        id: 1,
        title: "Navigate on Auto Pilot",
        para: 'Active Guidance from on-ramp to off-ramp',
        path: '/video/NavigateAutoPilot.mp4'
    },
    {
        id: 2,
        title: "Auto Lane Change",
        para: 'Automatically change lane while driving on the highway',
        path: '/video/AutoLaneChange.MP4'
    },
    {
        id: 3,
        title: "Summon",
        para: 'Automatically retrieve your car',
        path: '/video/Summon.MP4'
    },
    {
        id: 4,
        title: "Auto Park",
        para: 'Parallel and perpendicular parking with a single touch',
        path: '/video/Autopark.MP4'
    },
];


const Features = () => {

    const [videoPath, setVideoPath] = useState(FeaturesData[0].path);

    const ChangeVideo = (event) => {
        event.preventDefault();
        const num = event.target.value;
        setVideoPath(FeaturesData[num].path);
    }

    return (
        <Container>
            <Fade bottom>
                <TopText>
                    <h1>Features</h1>
                    <p>Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:</p>
                </TopText>
            </Fade>
            <VideoBox>
                {/* <video src="/video/NavigateAutoPilot.MP4" loop autoPlay muted></video> */}
                <video src={videoPath} loop autoPlay muted></video>
            </VideoBox>
            <Fade bottom>
                <BoxText>
                    {
                        FeaturesData.map((curEle, index) => {
                            return <div
                                key={curEle.id}
                                onClick={ChangeVideo}
                                value={`${index}`}
                                className="DataBox"
                            >
                                <DummyLine />
                                <h2>{curEle.title}</h2>
                                <p>{curEle.para}</p>
                            </div>
                        })
                    }
                </BoxText>
            </Fade>
        </Container>
    )
}

export default Features;

const Container = styled.div`
    width:100%;
    background-color:white;
    padding-top:10vh;
    padding-bottom:10vh;
`

const TopText = styled.div`
    width:70%;
    margin:0 auto;
    h1,p{
        color:black;
    }
    p{
        margin-top:0.5rem;
    }
    @media (max-width:840px){
        width:95%;
    }
`

const VideoBox = styled.div`
    width:100%;
    min-height:50vh;
`
const BoxText = styled.div`
    display:flex;
    padding:0 15vw;
    width:100%;
    display:flex;
    justify-content:center;
    ${'' /* margin-top:10vh; */}
    overflow-x:hidden;
    .DataBox h2,p{
        color:black;
    }
    .DataBox h2{
        font-size:1.2rem;
        margin-top:1.2rem;
    }
    .DataBox p{
        margin-top:1.4rem;
    }
    .DataBox{
        flex:1;
        margin:0 1rem;
        cursor:pointer;
        list-style:none;
    }
    @media (max-width:840px){
        padding:0 5vw;
        overflow-y: hidden;
        overflow-x: scroll;
        -webkit-overflow-y:hidden;
        -webkit-overflow-x:scroll;  
        justify-content:flex-start;
        ::-webkit-scrollbar {
            overflow: hidden;
        }
        .DataBox{
            min-width:250px;
        }
    }
`