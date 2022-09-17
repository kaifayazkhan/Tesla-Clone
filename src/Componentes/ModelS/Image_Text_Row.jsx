import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
const Image_Text_Row = ({ ImageTextData }) => {
    return (
        <Container>
            <Fade bottom>
                {
                    ImageTextData.map((imageData) => {
                        return <WrapTextImage key={imageData.id} direction={imageData.flexDir}>.
                            {
                                imageData.type == 'image'
                                    ?
                                    <ImageBox>
                                        <img src={imageData.path} alt="StayConnected" />
                                    </ImageBox>
                                    :
                                    <VideoBox>
                                        <video src={imageData.path} muted loop autoPlay></video>
                                    </VideoBox>
                            }
                            <TextBox>
                                <TextWrap dir={imageData.posValue}>
                                    <h3>{imageData.heading}</h3>
                                    <p>{imageData.text}</p>
                                </TextWrap>
                            </TextBox>
                        </WrapTextImage>
                    })
                }
            </Fade>
        </Container>
    )
}

export default Image_Text_Row;

const Container = styled.div`
    width:100%;
    margin-top:15vh;
    margin-bottom:15vh;
`

const WrapTextImage = styled.div`
    width:80%;
    margin:0 auto;
    display:flex;
    max-height:400px;
    flex-direction:${props => props.direction};
    @media (max-width:500px){
        flex-direction:column;
        height:100vh;
        width:100%;
    }
`

const ImageBox = styled.div`
    flex-basis:50%;  
    width:100%; 
    img{
        width:100%;
    }
    @media (max-width:500){
        flex-basis:100%;
    }
`

const VideoBox = styled.div`
    flex-basis:50%;
    width:100%;
    padding-left:10px;
    video{
        width:100%;
        height:100%;
        object-fit:contain;
    }
    @media (max-width:500px){
        flex-basis:100%;
        padding-left:0px;
    }
`

const TextBox = styled.div`
    flex-basis:50%;
    position:relative;
    @media (max-width:500px){
        flex-basis:100%;
        position:none;
    }
`
const TextWrap = styled.div`
    h3,p{
        color:white;
    }
    p{
        padding-top:1rem;
        font-size:14px;
        line-height:1.1rem;
    }
    position:absolute;
    top:50%;
    ${props => props.dir} : 20%;
    transform:translate(0%,-50%);
    @media (max-width:500px){
        postition:relative;
        top:0;
        left : 0%;
        transform:translate(0%,0%);
        h3,p{
            margin-top:1rem;
            padding-left:1rem;
        }
    }
`