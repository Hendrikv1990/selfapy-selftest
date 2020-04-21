import React from 'react'
import styled from 'styled-components'

const SubmitButton = ({ name, color }) => {
  const Button = styled.button`
    font-family: Archivo;
    width: 150px;
    height: 48px;
    border-radius: 24px;
    border: solid 2px #336670;
    background: #fff;
    color: #336670;
    line-height: 1.5;
    font-weight: bold;
    &:hover,
    &:focus {
      cursor: pointer;
    }
  `

  return (
    <div className="item">
      <Button color={color} type="submit" className="button">
        Next
      </Button>
    </div>
  )
}

export default SubmitButton
