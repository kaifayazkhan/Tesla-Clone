import React, { useEffect } from 'react';
import styled from 'styled-components'
import ModelSHome from '../ModelS/ModelSHome';
import HomeData from '../HomeData';
import Interior from '../ModelS/Interior';
import VideoCard from '../ModelS/VideoCard';
import SlidingCard from '../ModelS/SlidingCard';
import ImageTextRow from '../ModelS/Image_Text_Row';
import ImageTextData1 from '../ModelS/ImageTextData1';
import TextContent1 from '../ModelS/TextContent_1';
import ElectricPowertrain from '../ModelS/ElectricPowertrain';
import AutoPilotVision from '../ModelS/AutoPilotVision';
import Features from '../ModelS/Features';
import ModelSSpecs from '../ModelS/ModelSSpecs';
import ModelSPageButtons from '../ModelS/ModelSPageButtons';
import Banner from '../ModelS/Banner';
import FooterTextData from '../ModelS/FooterTextData';
import Footer from '../ModelS/Footer';

const ModelX = () => {
    useEffect(() => {
        document.title = "Model X | Tesla Clone";
    }, []);
    return (
        <Container>
            <ModelSHome bgImage={HomeData[3].backgroundImage} title={HomeData[3].title} btnText={"Order Now"} />
            <Interior />
            <VideoCard />
            <SlidingCard />
            <ImageTextRow ImageTextData={ImageTextData1} />
            <ModelSHome bgImage={'Model-X-Performance-Hero-Desktop-LHD.jpg'} />
            <TextContent1
                background={"white"}
                textcolor={"black"}
                topHeading={"Plaid"}
                mainHeading={"Beyond Ludicrous"}
                para={"Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S."}
            />
            <ElectricPowertrain />
            <ModelSHome bgImage={'Model-X-Exterior-Hero-Desktop-LHD.jpg'} />
            <TextContent1
                background={"black"}
                textcolor={"white"}
                topHeading={"Exterior"}
                mainHeading={"Designed for Efficiency"}
                para={"With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence."}
            />
            <ImageTextRow ImageTextData={ImageTextData1} />
            <AutoPilotVision />
            <Features />
            <ModelSSpecs />
            <ModelSPageButtons />
            <FooterTextData />
            <Footer />
        </Container>
    )
}

export default ModelX;

const Container = styled.div`
    overflow:hidden;
`