import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Button from '../Button';

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
        color:white;
        font-weight:500;
    }
    h1{
        font-size:1.7rem;
    }
    p{
        padding-top:10px;
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
const ModelSHome = ({ bgImage, title, des, btnText }) => {
    const windowWidth = window.innerWidth;
    return (
        <>
            <Wrap bgImage={bgImage}>
                <Fade bottom>
                    <ItemText>
                        <h1>{title}</h1>
                        <p>{des}</p>
                    </ItemText>
                </Fade>
                <Fade bottom>
                    <CarData>
                        <WrapCarData>
                            <WrapData heading="333 mi" para="Range (EPA est.)" />
                            <WrapData heading="1.99s" para="0-60 mph*" />
                            <WrapData heading="200mph" para="Top Speed" />
                            {windowWidth > 850 && <WrapData heading="1,020hp" para="Peak Power" />}
                        </WrapCarData>
                        {btnText && <Button title={btnText} borderClr={"white"} background={"white"} textColor={"white"} hoverText={"black"} width={"240px"} tabletWidth={"70%"} />}
                    </CarData>
                </Fade>
            </Wrap>
        </>
    )
}

export default ModelSHome;

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;//vertical-align
    align-items:center;//horizontal-align
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    width:100%;
    padding-top:15vh;
    text-align:center;
`

const CarData = styled.div`
    display:flex;
    text-align:center;
    align-items:center;
    padding-bottom:20px;
    @media (max-width:850px){
        flex-direction:column;
    }
`
const WrapCarData = styled.div`
    display:flex;
`