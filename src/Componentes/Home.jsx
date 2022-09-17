import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import HomeDataItem from './HomeData';

const Home = () => {
    return (
        <Container>
            {
                HomeDataItem.map((currEle) => {
                    return (
                        <Section
                            key={currEle.id}
                            title={currEle.title}
                            des={currEle.des}
                            backgroundImage={currEle.backgroundImage}
                            leftBtnText={currEle.leftBtnText}
                            rightBtnText={currEle.rightBtnText}
                        />
                    )
                })
            }
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
        overflow-x:hidden;
`