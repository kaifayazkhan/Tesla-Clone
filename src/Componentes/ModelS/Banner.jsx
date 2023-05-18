import React from 'react';
import styled from 'styled-components';

const Banner = ({ background }) => {
    return (
        <Container bgImage={background}></Container>
    )
}

export default Banner;

const Container = styled.div`
    width:100%;
    height:120vh;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-image:${props => `url("/images/${props.bgImage}")`};
     @media (max-width:840px){
        height:75vh;
     }
     @media (max-width:500px){
        height:50vh;
     }
`