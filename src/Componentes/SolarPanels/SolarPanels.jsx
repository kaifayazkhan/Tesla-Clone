import React, { useEffect } from 'react';
import styled from 'styled-components'
import ModelSHome from '../ModelS/ModelSHome';
import HomeData from '../HomeData';
const SolarPanels = () => {
    useEffect(() => {
        document.title = "Solar Roof | Tesla Clone";
    }, []);
    return (
        <Container>
            <ModelSHome bgImage={HomeData[4].backgroundImage} title={HomeData[4].title} btnText={"Order Now"} />
        </Container>
    )
}

export default SolarPanels;
const Container = styled.div`
    overflow: hidden;
`
