import React from 'react'
import styled from 'styled-components'
import { device } from '../assets/Styles'
import { FormattedMessage } from 'react-intl'

const Styling = styled.div.attrs({
  className: 'finish-container',
})`
  h3 {
    @media ${device.phone} {
      margin-top: 0;
    }
  }
  a.button {
    font-family: Archivo;
    font-weight: 600;
    width: 250px;
    padding: 0.5rem 1rem;
    border-radius: 24px;
    border: solid 2px #336670;
    background: #fff;
    color: #336670;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    margin-right: 1rem;
    &:hover,
    &:focus {
      cursor: pointer;
    }
    @media ${device.phone} {
      margin: 0 0 1rem 0;
    }
  }
  .yellow {
    background-color: #fdc400 !important;
    color: #49494b !important;
    border: 2px solid transparent !important;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  margin: 0 3rem;
  @media ${device.phone} {
    margin: 0;
  }
  .actions {
    margin-top: 2rem;
    display: flex;
    @media ${device.phone} {
      flex-direction: column;
    }
  }
  p {
    margin: 0 0 0.5rem 0;
  }
  @media ${device.phone} {
    display: block;
  }
  margin-bottom: 3rem;
`

export const Finish = React.memo((props) => {
  const First = () => {
    return (
      <React.Fragment>
        <h3>
          <FormattedMessage id={`finish.first.header`}>
            {(message) => message}
          </FormattedMessage>
        </h3>
        <p>
          <FormattedMessage id={`finish.first.p1`}>
            {(message) => message}
          </FormattedMessage>
          <a
            rel="noopener noreferrer"
            href="https://www.selfapy.de/achtsamkeit/"
          >
            <FormattedMessage id={`finish.first.link1`}>
              {(message) => message}
            </FormattedMessage>
          </a>
        </p>

        <p>
          <FormattedMessage id={`finish.first.p2`}>
            {(message) => message}
          </FormattedMessage>
        </p>
        <p>
          <FormattedMessage id={`finish.first.p3`}>
            {(message) => message}
          </FormattedMessage>
        </p>
        <div className="actions">
          <a
            className="button yellow"
            href="https://www.selfapy.de/achtsamkeit/"
          >
            Jetzt Kurs starten
          </a>
          <a
            className="button"
            data-toggle="modal"
            data-target=".fusion-modal.test"
            href="#"
          >
            Kostenloses Infogespräch
          </a>
        </div>
      </React.Fragment>
    )
  }

  const Second = () => {
    return (
      <React.Fragment>
        <h3>
          <FormattedMessage id={`finish.second.header`}>
            {(message) => message}
          </FormattedMessage>
        </h3>
        <p>
          <FormattedMessage id={`finish.second.p1`}>
            {(message) => message}
          </FormattedMessage>
          <a
            rel="noopener noreferrer"
            href="https://www.selfapy.de/depression/"
          >
            <FormattedMessage id={`finish.second.link1`}>
              {(message) => message}
            </FormattedMessage>
          </a>
        </p>

        <p>
          <FormattedMessage id={`finish.second.p2`}>
            {(message) => message}
          </FormattedMessage>
        </p>
        <p>
          <FormattedMessage id={`finish.second.p3`}>
            {(message) => message}
          </FormattedMessage>
        </p>
        <div className="actions">
          <a
            className="button yellow"
            href="https://www.selfapy.de/depression/"
          >
            Jetzt Kurs starten
          </a>
          <a
            className="button"
            data-toggle="modal"
            data-target=".fusion-modal.test"
            href="#"
          >
            Kostenloses Infogespräch
          </a>
        </div>
      </React.Fragment>
    )
  }

  const Third = () => {
    return (
      <React.Fragment>
        <h3>
          <FormattedMessage id={`finish.third.header`}>
            {(message) => message}
          </FormattedMessage>
        </h3>
        <p>
          <FormattedMessage id={`finish.third.p1`}>
            {(message) => message}
          </FormattedMessage>
          <a
            rel="noopener noreferrer"
            href="https://www.selfapy.de/depression/"
          >
            <FormattedMessage id={`finish.third.link1`}>
              {(message) => message}
            </FormattedMessage>
          </a>
        </p>

        <p>
          <FormattedMessage id={`finish.third.p2`}>
            {(message) => message}
          </FormattedMessage>
        </p>
        <p>
          <FormattedMessage id={`finish.third.p3`}>
            {(message) => message}
          </FormattedMessage>
        </p>
        <div className="actions">
          <a
            className="button yellow"
            href="https://www.selfapy.de/depression/"
          >
            Jetzt Kurs starten
          </a>
          <a
            className="button"
            data-toggle="modal"
            data-target=".fusion-modal.test"
            href="#"
          >
            Kostenloses Infogespräch
          </a>
        </div>
      </React.Fragment>
    )
  }

  const Fourth = () => {
    return (
      <React.Fragment>
        <h3>
          <FormattedMessage id={`finish.third.header`}>
            {(message) => message}
          </FormattedMessage>
        </h3>
        <p>
          <FormattedMessage id={`finish.third.p1`}>
            {(message) => message}
          </FormattedMessage>
        </p>

        <p>
          <FormattedMessage id={`finish.third.p2`}>
            {(message) => message}
          </FormattedMessage>
        </p>
        <p>
          <FormattedMessage id={`finish.third.p3`}>
            {(message) => message}
          </FormattedMessage>
        </p>
      </React.Fragment>
    )
  }

  const result = () => {
    if (props.score < 5) return <First />
    if (props.score < 15) return <Second />
    if (props.score < 20) return <Third />
    if (props.score < 28) return <Fourth />
  }

  return <Styling>{result()}</Styling>
})

export default Finish
