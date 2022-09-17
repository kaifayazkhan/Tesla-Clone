import React, { useState } from 'react';
import styled from 'styled-components';


const cardData = [
    {
        id: 1,
        heading: 'Cinematic Experience',
        text: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.'
    },
    {
        id: 2,
        heading: 'Yoke Steering',
        text: 'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.'
    },
    {
        id: 3,
        heading: 'Perfect Environment',
        text: 'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.'
    },
    {
        id: 4,
        heading: 'Redesigned Second Row',
        text: 'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.'
    },
    {
        id: 5,
        heading: 'Console-Grade Gaming',
        text: 'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.'
    },
];
const SlidingCard = () => {
    const [index, setIndex] = useState(0);
    const [itemCheck, setItemCheck] = useState();

    //Function for changing the text of a card when radion button in clicked
    const showData = (event) => {
        setIndex(event.target.value);
        setItemCheck("white");
    }

    //Function for changing the text of a card after 3s
    setTimeout(() => {
        if (index == cardData.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }, 3000);
    return (
        <SlideCard>
            <Card>
                <RadioButtons>
                    {
                        cardData.map((currEle, idx) => {
                            return (
                                <input key={currEle.id} type="radio" style={{ backgroundColor: `${itemCheck}` }} onClick={showData} value={idx} />
                            )
                        })
                    }
                </RadioButtons>
                <h1>{cardData[index].heading}</h1>
                <p>{cardData[index].text}</p>
            </Card>
        </SlideCard>
    )
}

export default SlidingCard;

const SlideCard = styled.div`
    width:100%;
`

const Card = styled.div`
    width:40%;
    margin: 0 auto;
    h1{
         margin-top:1rem;
        font-size:1rem;
        color:white;
    }
    p{
         margin-top:1rem;
         color:white;

    }
    @media (max-width:850px){
        width:90%;
    }
    @media (max-width:500px){
        width:90%;
    }
`
const RadioButtons = styled.div`
    display:flex;
    input[type='radio']{
        margin: 0 5px;
        -webkit-appearance:none;
        width:15px;
        height:15px;
        border:1px solid darkgray;
        border-radius:50%;
        outline:none;
        box-shadow:0 0 5px 0px gray inset;
        cursor:pointer;
    }
`