import React from 'react'
import styled from 'styled-components'
import { device } from '../assets/Styles'
import { FormattedMessage } from 'react-intl'

const Styling = styled.div.attrs({
  className: 'finish-container',
})`
  display: flex;
  justify-content: center;
  @media ${device.phone} {
    display: block;
  }
  margin-bottom: 3rem;
  .hero-container {
    padding: 2rem;
    flex: 0 1 100%;

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
  input {
    width: 100%;
    font-size: 14px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    border-bottom: 1px solid #00140f;
    top: -20px;
    font-size: 14px;
    color: #55706c;
    transition: border 500ms ease-in-out;
    &:focus,
    &:hover {
      outline: none;
      border-bottom: 1px solid #058273;
    }
  }
`

export const Finish = React.memo((props) => {
  const level = () => {
    if (props.score < 5) return 'first'
    if (props.score < 15) return 'second'
    if (props.score < 20) return 'third'
    if (props.score < 28) return 'fourth'
  }

  return (
    <Styling>
      <div className="hero-container">
        <h3>
          <FormattedMessage id={`finish.${level()}.header`}>
            {(message) => message}
          </FormattedMessage>
        </h3>
        <p className="lead">
          <FormattedMessage id={`finish.${level()}.p1`}>
            {(message) => message}
          </FormattedMessage>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.selfapy.de/achtsamkeit/"
        >
          <FormattedMessage id={`finish.${level()}.link1`}>
            {(message) => message}
          </FormattedMessage>
        </a>
        <p className="lead">
          <FormattedMessage id={`finish.${level()}.p2`}>
            {(message) => message}
          </FormattedMessage>
        </p>
        <p className="lead">
          <FormattedMessage id={`finish.${level()}.p3`}>
            {(message) => message}
          </FormattedMessage>
        </p>
      </div>
      <div className="image-wrapper"></div>
    </Styling>
  )
})

export default Finish
