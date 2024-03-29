import Checkbox from '@material-ui/core/Checkbox'
import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { device } from '../assets/Styles'
import { gsap, Power3, TimelineLite } from 'gsap'
import { useSelector } from 'react-redux'
import arrowRight from '../assets/arrow-right.png'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const Styling = styled.div.attrs({
  className: 'subscribe-container',
})`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media ${device.tablet} {
    margin: 2rem;
  }
  @media ${device.phone} {
    display: block;
  }

  .full-width {
    @media ${device.tablet} {
      width: 100%;
    }
  }
  .background {
    position: absolute;
    background: white;
    height: 100%;
    width: 100%;
    z-index: 2;
    visibility: hidden;
    opacity: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .gdpr-wrapper {
    position: relative;
    padding: 1rem 0;
    align-items: center;
    display: block !important;
    .PrivateSwitchBase-input-10 {
      width: 2rem;
    }
    a {
      padding: 0 0.5rem;
      color: #55706c;
      text-decoration: none;
      font-size: 14px;
    }
    span {
      padding: 0;
    }
  }
  margin-bottom: 3rem;
  button {
    position: absolute;
    right: 0;
    padding: 0;
    background: none;
    border: none;
    .image-wrapper {
      width: 48px;
      right: 0;
      width: 48px;
      height: 48px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-center: center;
      top: 0;
      background-color: #fdc400;
      border-radius: 100%;
      &:hover,
      &:focus {
        cursor: pointer;
        background: #fdc400;
      }
      .image-container {
        img {
          width: 15px;
          margin-top: 5px;
        }
      }
    }
    @media ${device.tablet} {
    }
  }

  .column-container {
    flex: 0 1 100%;
    @media ${device.tablet} {
      flex: 0 1 100%;
    }
  }
  .row-container {
    display: flex;
    width: 100%;
    /* flex-direction: column; */
    position: relative;
    padding-bottom: 1.2rem;
  }
  .width-100 {
    flex: 0 1 100%;
  }

  .hero-container {
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
  .field-error {
    position: absolute;
    bottom: 0;
    color: #ff5151;
    font-size: 14px;
  }
  .field-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    @media ${device.tablet} {
      flex-direction: column;
    }
  }
  .row {
    @media ${device.tablet} {
      flex-direction: row;
    }
  }
  input {
    padding: 1rem;
    font-size: 14px;
    display: inline-block;
    height: 3rem;
    width: 24rem;
    border: none;
    border: solid 2px #bab5b5;
    border-radius: 24px;
    font-size: 14px;
    color: #55706c;
    transition: border 500ms ease-in-out;
    @media ${device.tablet} {
      width: 100%;
    }
    &:focus,
    &:hover {
      outline: none;
      border: solid 2px #336670;
    }
  }
`

const TextField = ({ error, name, label, ...props }) => {
  return (
    <React.Fragment>
      <input name={name} className="input" {...props} placeholder={label} />
    </React.Fragment>
  )
}

const Message = () => {
  useEffect(() => {
    const element = document.querySelector('.background')
    const timeline = new TimelineLite()
    timeline.to(
      element,
      1,
      {
        ease: Power3.easeInOut,
        autoAlpha: 0.95,
      },
      '-=0.5',
    )
  }, [])
  return (
    <div className="background">
      <h4>Vielen Dank für deine Anmeldung.</h4>
      <p>Klick weiter, um zu deinem Testergebnis zu gelangen.</p>
    </div>
  )
}

export const Subscribe = React.memo((props) => {
  const finalize = useSelector((state) => {
    return state.subscribe.finalize
  })
  return (
    <Styling>
      {finalize && <Message />}
      <div className="column-wrapper">
        <div className="row-container">
          <div className="hero-container">
            <h3>Fast geschafft!</h3>
            <p className="lead">
              Trage dich für unseren Newsletter ein, um zu deinen
              Testergebnissen zu gelangen!
            </p>
          </div>
        </div>
        <div className="row-container">
          <div className="field-wrapper row full-width">
            <TextField
              name="email"
              type="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              error={props.touched['email'] && props.errors['email']}
              label="Email"
              value={props.values['email']}
            />
            <button type="submit" className="button">
              <div className="image-wrapper">
                <div className="image-container">
                  <img src={arrowRight}></img>
                </div>
              </div>
            </button>
          </div>
          {props.touched['email'] && props.errors['email'] && (
            <div className="field-error">{props.errors['email']}</div>
          )}
        </div>
        <div className="row-container">
          <div className="row-container gdpr-wrapper">
            <Checkbox
              color="default"
              name="gdpr"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            Ich habe die
            <a
              href="https://www.selfapy.de/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung
            </a>
            gelesen und akzeptiere sie.
            {props.errors.gdpr && props.touched.gdpr && (
              <div className="field-error">{props.errors.gdpr}</div>
            )}
          </div>
        </div>
      </div>
    </Styling>
  )
})

export default Subscribe
