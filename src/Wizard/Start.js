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

export const Start = (props) => {
  return (
    <Styling>
      <div className="hero-container">
        <span>Exercise Questionaire</span>
        <h1>Habe ich eine Depression?</h1>
        <p className="lead">
          Grundlage dieses Tests ist der PHQ-9-Fragebogen, der als Screening
          Instrument zur Feststellung des Schweregrads einer Depression
          entwickelt wurde und der in den Nationalen Versorgungsleitlinien zur
          Depressionsdiagnostik empfohlen wird.
        </p>
      </div>
      <div className="image-wrapper"></div>
    </Styling>
  )
}

export default Start
