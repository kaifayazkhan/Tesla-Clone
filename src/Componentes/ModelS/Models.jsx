import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModelSHome from './ModelSHome';
import HomeData from '../HomeData';
import Interior from './Interior';
import VideoCard from './VideoCard';
import SlidingCard from './SlidingCard';
import ImageTextRow from './Image_Text_Row';
import ImageTextData1 from './ImageTextData1';
import ImageTextData2 from './ImageTextData2';
import TextContent1 from './TextContent_1';
import ElectricPowertrain from './ElectricPowertrain';
import Banner from './Banner';
import VideoBanner from './VideoBanner';
import AutoPilotVision from './AutoPilotVision';
import Features from './Features';
import ModelSSpecs from './ModelSSpecs';
import ModelSPageBUttons from './ModelSPageButtons';
import FooterTextData from "./FooterTextData";
import Footer from './Footer';
const Models = () => {
    useEffect(() => {
        document.title = "Model S | Tesla Clone";
    }, []);
    return (
        <Container>
            <ModelSHome bgImage={HomeData[2].backgroundImage} title={HomeData[2].title} des={HomeData[2].des} btnText={"Order Now"} />
            <Interior />
            <VideoCard />
            <SlidingCard />
            <ImageTextRow ImageTextData={ImageTextData1} />
            <ModelSHome bgImage={'/images/Model-S-Performance.jpg'} />
            <TextContent1
                background={"white"}
                textcolor={"black"}
                topHeading={"Plaid"}
                mainHeading={"Beyond Ludicrous"}
                para={"Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S."}

            />
            <ElectricPowertrain />
            <Banner background={'Model-S-Exterior-Hero-Desktop-Global.jpg'} />
            <TextContent1
                background={"black"}
                textcolor={"white"}
                topHeading={"Exterior"}
                mainHeading={"Designed for Efficiency"}
                para={"With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence."}
            />
            <ImageTextRow ImageTextData={ImageTextData2} />
            <VideoBanner />
            <AutoPilotVision />
            <Features />
            <ModelSSpecs />
            <ModelSPageBUttons />
            <FooterTextData />
            <Footer />
        </Container>
    )
}

export default Models;

const Container = styled.div`
    ${'' /* background:#000; */}
    overflow:hidden;
`