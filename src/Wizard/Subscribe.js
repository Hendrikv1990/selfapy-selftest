import Checkbox from '@material-ui/core/Checkbox'
import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { device } from '../assets/Styles'
import { gsap, Power3, TimelineLite } from 'gsap'
import { useSelector } from 'react-redux'

import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const Styling = styled.div.attrs({
  className: 'subscribe-container',
})`
  position: relative;
  display: flex;
  justify-content: center;
  @media ${device.phone} {
    display: block;
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
    .PrivateSwitchBase-input-10 {
      width: 2rem;
    }
    a {
      padding-left: 1rem;
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
    font-family: Archivo;
    width: 150px;
    height: 3rem;
    border-radius: 0px 4px 4px 0px;
    background: #fdc400;
    color: #49494b;
    line-height: 1.5;
    font-weight: bold;
    @media ${device.tablet} {
      border-radius: 4px;
      margin-top: 1rem;
      width: 100%;
    }
    &:hover,
    &:focus {
      cursor: pointer;
      background: #fdc400;
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
  input {
    padding: 1rem;
    font-size: 14px;
    display: inline-block;
    height: 3rem;
    width: 14rem;
    margin-right: -2px;
    border: none;
    border: solid 2px #bab5b5;
    border-radius: 4px 0px 0px 4px;
    font-size: 14px;
    color: #55706c;
    transition: border 500ms ease-in-out;
    @media ${device.tablet} {
      width: 100%;
      border-radius: 4px;
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
    return timeline.to(
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
      <h4>Thank you for subscribing</h4>
      <p>Click next to find your score.</p>
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
          <div className="field-wrapper width-100">
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
              Anmelden
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
            <a
              href="https://www.google.gr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="form.gdpr">
                {(message) => message}
              </FormattedMessage>
            </a>
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
