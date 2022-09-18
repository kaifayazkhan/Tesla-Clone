import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
const Interior = () => {
    return (
        <>
            <Container>
                <Fade bottom>
                    <ItemText>
                        <h1>Interior of the Future</h1>
                    </ItemText>
                </Fade>
                <ContainerBg>
                </ContainerBg>
            </Container>
        </>
    )
}

export default Interior;

const Container = styled.div`
    width:100vw;.
    text-align:center;
`
const ItemText = styled.div`
    width:100%;
    text-align:center;
    background:#000000;
    padding-top:10vh;
    h1{
    color:white;
    }
`
const ContainerBg = styled.div`
    width:100vw;
    height:140vh;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-image:url('/images/new-interior.jpg');
`