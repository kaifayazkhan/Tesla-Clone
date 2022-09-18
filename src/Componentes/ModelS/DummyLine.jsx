import React from 'react'
import styled from 'styled-components'

const DummyLine = () => {
    return (
        <HeadLine></HeadLine>
    )
}

export default DummyLine

const HeadLine = styled.div`
    width:100%;
    height:2px;
    background-color:gray;
`