import React from 'react';
import styled from 'styled-components';

const VideoCard = () => {
    return (
        <Container>
            <ContainerVideo>
                <video src="/video/modelS.mp4" muted loop autoPlay />
            </ContainerVideo>
        </Container>
    )
}

export default VideoCard;

const Container = styled.div`
background:black;
    width:100%;
    height:100vh;
    padding-top:10vh;
    padding-bottom:10vh;
    @media (max-width:840px){
    height:50vh;
    padding-top:15vh;
    }
    @media (max-width:500px){
    height:30vh;
    padding-top:15vh;
    }
`
const ContainerVideo = styled.div`
    width:90%;
    margin:0 auto;
    height:85vh ;
    video{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius: 20px;
    }
    @media (max-width:850px){
        width:100%;
        height:40vh;
        video{
            border-radius: 0;
        }
    }
    @media (max-width:500px){
        width:100%;
        height:25vh;
        video{
            border-radius: 0;
        }
    }
`