import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const FooterTextData = () => {
    return (
        <Fade bottom>
            <TextData>
                <p>Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. Learn more about Standard Connectivity and any limitations.</p>
            </TextData>
        </Fade>
    )
}

export default FooterTextData;

const TextData = styled.div`
background:white;
    width:100%;
    padding:5% 20%;
    text-align:center;
    @media (max-width:500px){
        padding:5%;
    }
`