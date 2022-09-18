import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Fade from 'react-reveal/Fade';

const VideoTopData = [
    {
        id: 1,
        title: '405 mi',
        text: 'Go anywhere with up to 405 miles of estimated range on a single charge',
        text1: 'Range(EPA est.)'
    },
    {
        id: 2,
        title: '15 min',
        text: 'Recharge up to 200 miles in 15 minutes at Supercharger locations',
        text1: 'Recharge up to 200 mi'
    },
    {
        id: 3,
        title: '35,000 +',
        text: 'Superchargers placed along popular routes',
        text1: 'Global Superchargers'
    },
];

const WrapData = ({ title, text, text1 }) => {
    return (
        <>
            <DataBox>
                <h1>{title}</h1>
                <p className="paraText">{text}</p>
                <p className="secondParaText">{text1}</p>
            </DataBox>
        </>
    )
}
const DataBox = styled.div`
    width:30%;
    margin:0 1rem;
    h1,p{
        color:white;
        text-align:center;
    }
    h1{
        font-size:1.5rem;
    }
    p{
        font-size:.85rem;
        font-weight:500;
    }
    .secondParaText{
        display:none;
    }
    @media (max-width: 840px) {
        h1{
            font-size:1.2rem;
            font-weight:500; 
        }
        .paraText{
            display:none;
        }
        .secondParaText{
            display:block;
        }

    }
`
const VideoBanner = () => {
    return (
        <>
            <Container>
                <VideoContainer>
                    <video src="../../../public/video/GoAnywhere.mp4" muted loop autoPlay></video>
                    <TextContainer>
                        {VideoTopData.map((curEle) => {
                            return (
                                <WrapData
                                    key={curEle.id}
                                    title={curEle.title}
                                    text={curEle.text}
                                    text1={curEle.text1}
                                />
                            )
                        })}
                    </TextContainer>
                </VideoContainer>
                <TextData>
                    <Fade bottom>
                        <WrapTextData>
                            <h3>Range</h3>
                            <h1>Go Anywhere</h1>
                            <p>
                                With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model S.
                            </p>
                        </WrapTextData>
                    </Fade>
                    <Button
                        title="Order Now"
                        borderClr="black"
                        background="black"
                        textColor="black"
                        hoverText="white"
                        width="200px"
                        tabletWidth="180px"
                    />
                </TextData>
            </Container>
        </>
    )
}

export default VideoBanner;

const Container = styled.div`
    background:white;
    width:100%;
    height:100%;
    display:flex;
    @media (max-width:840px){
        flex-direction:column;
    }
`
const VideoContainer = styled.div`
    width:70%;
    height:100%;
    position:relative;
    background:white;
    video{
        object-fit:contain;
        width:100%;
        height:100%;
    }
    @media (max-width:840px){
        width:100%;
    }
`
const TextContainer = styled.div`
    display:flex;
    justify-content:space-between;
    position:absolute;
    bottom:10%;
    padding:0 1.5rem;
    @media (max-width:840px){
        padding:0 15%;
        justify-content:center;
    }
    @media (max-width:500px){
        padding:0 5%;
        ${'' /* justify-content:center; */}
    }
`
const TextData = styled.div`
        width:30%;
        height:100%;
        padding:2rem 3rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        background:white;
        h1,p,h3{
            color:black;
        }
        h3{
            font-weight:400;
        }
        h1{
            font-weight:500;
        }
        p{
            margin-top:2rem;
        }
        @media (max-width:840px){
            width:100%;
                    padding:2rem;
        }
`
const WrapTextData = styled.div`
    margin-bottom:75%;
    @media (max-width:840px){
        margin-bottom:4%;
    }
`
