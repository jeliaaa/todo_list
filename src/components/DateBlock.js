import React from 'react'
import { styled } from 'styled-components'
const DateDiv = styled.div`
    position:absolute;
    left:5px;
    top: 5px;
    background-color: #1a1a40;
    color: white;
    font-size:25px;
    padding: 5px 10px;
`

const DateBlock = () => {
  const date = new Date();
  return (
    <DateDiv>
        {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
    </DateDiv>
  )
}

export default DateBlock