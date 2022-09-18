import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Fade from 'react-reveal/Fade';

const ModelSPlaidLeft = [
    {
        id: 1,
        title: 'Range (EPA est.)',
        para: '396 mi'
    },
    {
        id: 2,
        title: '1/4 Mile',
        para: '9.23@155 mph trap speed'
    },
    {
        id: 3,
        title: 'Peak Power',
        para: '1,020 hp'
    },
    {
        id: 4,
        title: 'Weight',
        para: '4,766 lbs'
    },
    {
        id: 5,
        title: 'Wheels',
        para: '19" or 21"'
    },
    {
        id: 6,
        title: 'Cargo',
        para: '28 cu ft'
    },
];
const ModelSPlaidRight = [
    {
        id: 1,
        title: '*Acceleration 1.99 s 0-60 mph',
        para: 'with rollout subtracted'
    },
    {
        id: 2,
        title: '†Top Speed 200 mph',
        para: 'when equipped with paid hardware upgrades'
    },
    {
        id: 3,
        title: 'Peak Power',
        para: '1,020 hp'
    },
    {
        id: 4,
        title: 'Drag Coefficient',
        para: '0.208 Cd'
    },
    {
        id: 5,
        title: 'Powertrain',
        para: 'Tri Motor"'
    },
    {
        id: 6,
        title: 'Supercharging Max',
        para: '250 kW'
    },
];
const ModelSLeft = [
    {
        id: 1,
        title: 'Range (EPA est.)',
        para: '405 mi'
    },
    {
        id: 2,
        title: 'Peak Power',
        para: '670 hp'
    },
    {
        id: 3,
        title: 'Wheels',
        para: '19" or 21"'
    },
    {
        id: 4,
        title: 'Cargo',
        para: '28 cu ft'
    },
    {
        id: 5,
        title: 'Acceleration',
        para: '3.1 s 0-60 mph'
    },
];
const ModelSRight = [
    {
        id: 1,
        title: 'Top Speed',
        para: '149 mph'
    },
    {
        id: 2,
        title: 'Drag Coefficient',
        para: '0.208 Cd'
    },
    {
        id: 3,
        title: 'Supercharging',
        para: 'Max 250 kW'
    },
    {
        id: 4,
        title: 'Weight',
        para: '4,561 lbs'
    },
    {
        id: 5,
        title: 'Powertrain',
        para: 'Tri Motor"'
    },
];

const ModelSSpecs = () => {

    const [changeLeftData, setChangeLeftData] = useState(ModelSPlaidLeft);
    const [changeRightData, setChangeRightData] = useState(ModelSPlaidRight);

    const showData1 = () => {
        setChangeLeftData(ModelSPlaidLeft);
        setChangeRightData(ModelSPlaidRight);
    }
    const showData2 = () => {
        setChangeLeftData(ModelSLeft);
        setChangeRightData(ModelSRight);
    }
    return (
        <Container>
            <LeftBox>
                <img src="/images/Model-S-Specs-Hero-Desktop-LHD.jpg" alt="Model S Specs HeroImage" />
            </LeftBox>
            <Fade bottom>
                <RightBox>
                    <h1>Model S <span>Specs</span></h1>
                    <ButtonGroup>
                        <li onClick={showData1} >
                            <Button title={"Model S Plaid"} borderClr={"white"} background={"white"} textColor={"white"} hoverText={"black"} width={"200px"} />
                        </li>
                        <li onClick={showData2}>
                            <Button title={"Model S"} borderClr={"white"} background={"white"} textColor={"white"} hoverText={"black"} width={"200px"} />
                        </li>
                    </ButtonGroup>
                    <TextData>
                        <DataLeft>
                            {
                                changeLeftData.map((curEle) => {
                                    return <div className="carData" key={curEle.id}>
                                        <hr className="topLine" />
                                        <h3>{curEle.title}</h3>
                                        <p>{curEle.para}</p>
                                    </div>
                                })
                            }
                        </DataLeft>
                        <DataRight>
                            {
                                changeRightData.map((curEle) => {
                                    return <div className="carData" key={curEle.id}>
                                        <hr className="topLine" />
                                        <h3>{curEle.title}</h3>
                                        <p>{curEle.para}</p>
                                    </div>
                                })
                            }
                        </DataRight>
                    </TextData>
                </RightBox>
            </Fade>
        </Container>
    )
}

export default ModelSSpecs;

const Container = styled.div`
    width:100%;
    padding:5vh 0;
    background-color:black;
    display:flex;
    p,h3{
        color:white;
        margin-left:1rem;
    }
    p{
        margin-top:.5rem;
    }
    .topLine{
        width:30px;
        background:white;
        color:white;
        height:.5px;
        margin-left:1rem;
    }
    h3{
        font-size:1rem;
        margin-top:.5rem;
    }
    @media (max-width:840px){
        h3{
            font-weight:500;
        }
    }
    @media (max-width:500px){
        flex-direction:column;
    }
`

const LeftBox = styled.div`
    flex-basis:50%;
    img{
        width:100%;
        height:100%;
    }
        @media (max-width:500px){
        flex-basis:100%;
    }
`

const RightBox = styled.div`
    flex-basis:50%;
    h1{
        color:white;
        margin-left:1rem;
    }
    span{
        color:white;
        font-weight:500;
    }
    @media (max-width:500px){
        flex-basis:100%;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-top:1.5rem;
    li{
        list-style-type: none;
        margin-left:1rem;
    }
    @media (max-width:500px){
        li{
            flex-basis:50%;
        }
    }
`
const TextData = styled.div`
    display: flex;
    .carData{
        margin-top:1rem;
    }
`
const DataLeft = styled.div`
    flex-basis:50%;
`
const DataRight = styled(DataLeft)`

`