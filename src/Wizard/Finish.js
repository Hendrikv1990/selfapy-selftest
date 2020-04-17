import React from 'react'
import styled from 'styled-components'
import { device } from '../assets/Styles'

const Styling = styled.div.attrs({
  className: 'start-container',
})`
  display: flex;
  @media ${device.phone} {
    display: block;
  }
  margin-bottom: 3rem;
  .hero-container {
    flex: 0 1 50%;

    span {
      font-family: Archivo;
      font-size: 14px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.14;
      letter-spacing: normal;
      color: #87898f;
    }
  }
  .image-wrapper {
    flex: 0 1 50%;
  }
`

export const Finish = (props) => {
  const level = () => {
    if (props.score < 5) return 'keine depressiven Anzeichen'
    if (props.score < 15) return 'leichtgradige Depression'
    if (props.score < 20) return 'mittelgradige Depression'
    if (props.score < 28) return 'schwergradige Depression'
  }
  return (
    <Styling>
      <div className="hero-container">
        <h3>{`Great job! Your score is ${props.score}`}.</h3>
        <p className="lead">
          {`This means that your depression level is ${level()}`}
        </p>
      </div>
      <div className="image-wrapper"></div>
    </Styling>
  )
}

export default Finish
