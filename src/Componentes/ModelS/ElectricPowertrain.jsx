import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import DummyLine from './DummyLine';


const ElectricPowertrainData = [
    {
        id: 1,
        title: "Model S",
        para: "Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.",
        time: "3.1 s",
        speed: "0-60 mph",
        distance: "450 mi",
        range: "Range (EPA est.)",
        power: "670 hp",
        totalPower: "Peak Power",
        imagePath: "/images/ElectricPowerTain.jpg"
    },
    {
        id: 2,
        title: "Model S Plaid",
        para: "Maintain 1, 000+ horsepower all the way to 200 mph with Tri - Motor All- Wheel Drive, featuring torque vectoring and three independent carbon - sleeved rotors.",
        time: "1.99 s*",
        speed: "0-60 mph",
        distance: "396 mi",
        range: "Range (EPA est.)",
        power: "1020 hp",
        totalPower: "Peak Power",
        imagePath: "/images/ModelSPlaid.jpg"
    },
];

const WrapData = (props) => {
    return (
        <WrapDatas>
            <h1>{props.heading}</h1>
            <p>{props.para}</p>
        </WrapDatas>
    )
}
const WrapDatas = styled.div`
    width:15vw;
    h1,p{
        color:black;
        font-weight:500;
    }
    h1{
        font-size:1.5rem;
        font-weight:600;
    }
    p{
        padding-top:0px;
    }
    @media (max-width:500px){
        h1{
            font-size:20px;
        }
        p{
            font-size:12px;
        }
    }
    @media (max-width:850px){
        width:30vw;
    }
`

const ElectricPowertrain = () => {
    const [ImagePath, setImagePath] = useState(ElectricPowertrainData[0].imagePath);
    const [colors, setColors] = useState("gray");
    const ChangeImage = (event) => {
        const index = event.target.id;
        setImagePath(ElectricPowertrainData[index - 1].imagePath)
        setColors("black");
    }
    return (
        <Container>
            <Fade bottom>
                <TopText>
                    <h1>Electric Powertrain</h1>
                    <p>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
                </TopText>
            </Fade>
            <ImageBox>
                {/* <img src="/images/ElectricPowerTain.jpg" alt="Electric Power Tain" /> */}
                <img src={ImagePath} alt="Electric Power Tain" />
            </ImageBox>
            <ModelsModelPlaid>
                <Fade bottom>
                    {
                        ElectricPowertrainData.map((currEle, indx) => {
                            return (
                                <ModelBox key={currEle.id} id={currEle.id} onClick={ChangeImage} color={colors} >
                                    <DummyLine />
                                    <h1>{currEle.title}</h1>
                                    <p>{currEle.para}</p>
                                    <WrapCarData>
                                        <WrapData heading={currEle.time} para={currEle.speed} />
                                        <WrapData heading={currEle.distance} para={currEle.range} />
                                        <WrapData heading={currEle.power} para={currEle.totalPower} />
                                    </WrapCarData>
                                </ModelBox>
                            )
                        })
                    }
                </Fade>
            </ModelsModelPlaid>
            <p id="bottomPara">* With rollout subtracted</p>
        </Container>
    )
}

export default ElectricPowertrain;

const Container = styled.div`
    width:100vw;
    background-color:#f4f4f4;
    padding-top:15vh;
    padding-bottom:5vh;
    #bottomPara{
        text-align:center;
        margin-top:10vh;
    }
`
const TopText = styled.div`
    padding-left:10vw;
    padding-right:25vw;
    p{
        margin-top:3vh;
    }
    h1{
        color:#171a20;
    }
    @media (max-width:840px){
        padding-left:20px;
        padding-right:20px;
    }
`

const ImageBox = styled.div`
    width:95%;
    height:100vh;
    margin:0 auto;
    margin-top:10vh;
    background-color:#fff;
    border-radius:15px;
    img{
        width:100%;
        height:100%;
    }
    @media (max-width:840px){
            height:50vh;
    }
    @media (max-width:500px){
            height:30vh;
    }
`

const ModelsModelPlaid = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:10vh;
    overflow-x:hidden;
    @media (max-width:780px){
        overflow-y: hidden;
        overflow-x: scroll;
        -webkit-overflow-y:hidden;
        -webkit-overflow-x:scroll;  
        justify-content:flex-start;
        ::-webkit-scrollbar {
            overflow: hidden;
        }
    }
`

const ModelBox = styled.div`
    max-width:500px;
    margin:0 10px;
    padding:20px;
    opacity:${props => props.opacity};
    h1,p{
        color:${props => props.color};
    }
    h1{
        font-size:1.2rem;
        margin-top:1rem;
    }
    p{
        margin-top:1rem;
    }
    @media (max-width:840px){
        max-width:350px;
    }
    @media (max-width:500px){
        width:95%;
    }
`
const WrapCarData = styled.div`
    display:flex;
`