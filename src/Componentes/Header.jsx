import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/Fi';
import { TiTimes } from 'react-icons/Ti';
import { Link } from 'react-router-dom';
import { MenuData, BurgerData } from './HeaderMenuData';
const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <Link to='/'>
                <img src="/images/logo.svg" alt="Logo Image" />
            </Link>
            <Menu>
                {
                    MenuData.map((currEle) => {
                        return <li key={currEle.id}><Link to='/'>{currEle.text}</Link></li>
                    })
                }
            </Menu>
            <RightMenu>
                <li><Link to='/'>Shop</Link></li>
                <li><Link to='/'>Account</Link></li>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                {
                    BurgerData.map((currEle) => {
                        return <li key={currEle.id}><Link to="/">{currEle.text}</Link></li>
                    })
                }
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width:100%;
    min-height:60px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:0 20px;
    position:fixed;
    z-index:1;
`

const Menu = styled.div`
    display: flex;
    justify-content: center;
    flex:1;
    li{
        padding:5px 10px;
        font-weight:500;
        text-transform:uppercase;
        list-style-type:none;
    }
        li:hover{
        background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    }
    @media(max-width:768px){
        display:none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    list-style-type: none;
    li{
        padding:5px 10px;
        font-weight:500;
        text-transform:uppercase;
    }
    li:hover{
        background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    }
    Link{
        margin:0 10px;
        font-weight:600;
        text-transform:uppercase;
    }
    @media (max-width:768px){
        li{
            display:none;
        }
    }
`

const CustomMenu = styled(FiMenu)`
    cursor:pointer;
    font-size:25px;
    font-weight:600;
    margin-left:10px;
`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    z-index:10;
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    list-style-type:none;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.3s ease-in-out;

    li{
        padding:15px 0;
        font-weight:500;
        border-bottom:1px solid rgba(0,0,0,0.2);
    }
    li:hover{
        font-weight:600;
        transform:transtion 0.3s ease-in;
    }
`

const CustomClose = styled(TiTimes)`
    cursor:pointer;
    font-size:25px;
    font-weight:600;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`
