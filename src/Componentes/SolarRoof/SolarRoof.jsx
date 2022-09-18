import React, { useEffect } from 'react';
import styled from 'styled-components'
import ModelSHome from '../ModelS/ModelSHome';
import HomeData from '../HomeData';
import Banner from '../ModelS/Banner';
import TextContent1 from '../ModelS/TextContent_1';
import VideoCard from '../ModelS/VideoCard';
import VideoBanner from '../ModelS/VideoBanner';
import Footer from '../ModelS/Footer';
const SolarRoof = () => {
    useEffect(() => {
        document.title = "Solar Roof | Tesla Clone";
    }, []);
    return (
        <Container>
            <ModelSHome bgImage={HomeData[5].backgroundImage} title={HomeData[5].title} btnText={"Order Now"} />
            <Banner background={'../../../public/images/solar-roof.jpg'} />
            <TextContent1
                background={"white"}
                textcolor={"black"}
                topHeading={"Design"}
                mainHeading={"Complement Your Home’s Aesthetic"}
                para={"Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home’s natural styling. Chat with an Energy Advisor to ask any questions about installing solar with Tesla."}
            />
            <VideoCard />
            <VideoBanner />
            <TextContent1
                background={"white"}
                textcolor={"black"}
                topHeading={"Installation"}
                mainHeading={"Trusted Expertise"}
                para={"Our in-house team of energy professionals has installed nearly 4.0 GW of solar across approximately 480,000 roofs—cumulatively generating over 25.0 TWhs of clean energy. From design to power on, we take care of everything. Chat with an Energy Advisor to ask any questions about Solar Roof."}
            />
            <Banner background={'../../../public/images/SR-tesla-app-D.jpg'} />
            <TextContent1
                background={"white"}
                textcolor={"black"}
                topHeading={"Control"}
                mainHeading={"Monitor and Optimize"}
                para={"With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access."}
            />
            <Footer />
        </Container>
    )
}

export default SolarRoof

const Container = styled.div`
    overflow: hidden;
`