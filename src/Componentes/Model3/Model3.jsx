import React from 'react';
import styled from 'styled-components'
import ModelSHome from '../ModelS/ModelSHome';
import HomeData from '../HomeData';
import Banner from '../ModelS/Banner';
import FooterTextData from '../ModelS/FooterTextData';
import Footer from '../ModelS/Footer';

const Model3 = () => {
    return (
        <Container>
            <ModelSHome bgImage={HomeData[0].backgroundImage} title={HomeData[0].title} btnText={"Order Now"} />
            <Banner background={'Model-3-Performance-Hero-Desktop-LHD.jpg'} />
            <FooterTextData />
            <Footer />
        </Container>
    )
}

export default Model3;

const Container = styled.div`  
    overflow: hidden;
`