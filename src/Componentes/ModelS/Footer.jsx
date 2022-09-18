import React from 'react';
import styled from 'styled-components';


const year = new Date().getFullYear();
const FooterData = [
    { id: 1, text: `Tesla ©️ ${year}`, class: "footerText" },
    { id: 2, text: `Privacy & Legal`, class: "footerText" },
    { id: 3, text: `Vehicle Recalls`, class: "footerText" },
    { id: 4, text: `Contact`, class: "footerText", class1: 'footerHide' },
    { id: 5, text: `Careers`, class: "footerText" },
    { id: 6, text: `News`, class: "footerText" },
    { id: 7, text: `Engage`, class: "footerText", class1: 'footerHide' },
    { id: 8, text: `Locations`, class: "footerText", class1: 'footerHide' },
]
const Footer = () => {
    return (
        <Container>
            <div className="footer">
                {
                    FooterData.map((curEle) => {
                        return <p key={curEle.id} id={curEle.class1} className={curEle.class}>{curEle.text}</p>
                    })
                }
            </div>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    width:100%;
    padding:5vh 0;
    text-align:center;
    .footer{
        width:70%;
        margin:0 auto;
        display:flex;
        justify-content:center;
        @media  (max-width:500px){
            flex-direction:column;
            #footerHide{
                display:none;
            }
        }
        @media (max-width:840px){
            width:90%;
        }
        .footerText{
            font-weight:400;
            margin-left:1rem;
            font-size:.9rem;
            cursor:pointer;
            transition: all 0.3s ease-in-out;
            @media  (max-width:500px){
                margin-left:0rem;
                margin-top:.5rem;
            }
        }
        .footerText:hover{
            transform:scale(1.1);
        }
    }
`