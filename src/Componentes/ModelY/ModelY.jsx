import React, { useEffect } from 'react';
import styled from 'styled-components'
import ModelSHome from '../ModelS/ModelSHome';
import HomeData from '../HomeData';
import VideoCard from '../ModelS/VideoCard';
import VideoBanner from '../ModelS/VideoBanner';
import TextContent1 from '../ModelS/TextContent_1';
import AutoPilotVision from '../ModelS/AutoPilotVision';
import ModelSSpecs from '../ModelS/ModelSSpecs';
import ModelSPageButtons from '../ModelS/ModelSPageButtons';
import FooterTextData from '../ModelS/FooterTextData';
import Footer from '../ModelS/Footer';

const ModelY = () => {
    useEffect(() => {
        document.title = "Model Y | Tesla Clone";
    }, []);
    return (
        <Container>
            <ModelSHome bgImage={HomeData[1].backgroundImage} title={HomeData[1].title} btnText={"Order Now"} />
            <VideoCard />
            <TextContent1
                background={"white"}
                textcolor={"black"}
                topHeading={"Utility"}
                mainHeading={"A Place For Everything"}
                para={"Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick."}
            />
            <ModelSHome bgImage={'AWD_hero@2.jpg'} />
            <TextContent1
                background={"white"}
                textcolor={"black"}
                topHeading={"All-Wheel Drive"}
                mainHeading={"Dual Motor"}
                para={"Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road."}
            />
            <VideoBanner />
            <ModelSHome bgImage={'Model-X-Exterior-Hero-Desktop-LHD.jpg'} />
            <AutoPilotVision />
            <TextContent1
                background={"white"}
                textcolor={"black"}
                topHeading={"Interior"}
                mainHeading={"Built Around the Driver"}
                para={"With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky."}
            />
            <ModelSSpecs />
            <ModelSPageButtons />
            <FooterTextData />
            <Footer />
        </Container>
    )
}

export default ModelY

const Container = styled.div`
    overflow:hidden;
`