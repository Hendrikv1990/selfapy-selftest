import React from 'react'
import styled from 'styled-components'
import { device } from '../assets/Styles'

const Styling = styled.div.attrs({
  className: 'subscribe-container',
})`
  display: flex;
  justify-content: center;
  @media ${device.phone} {
    display: block;
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
    flex-direction: column;
    position: relative;
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
    margin-bottom: 45px;
    position: relative;
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

export const Subscribe = React.memo((props) => {
  return (
    <Styling>
      <div className="column-wrapper">
        <div className="row-container">
          <div className="hero-container">
            <h3>Please subscribe here to proceed</h3>
            <p className="lead">You can write something here.</p>
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
              Subscribe
            </button>
          </div>
          {props.touched['email'] && props.errors['email'] && (
            <div className="field-error">{props.errors['email']}</div>
          )}
        </div>
      </div>
    </Styling>
  )
})

export default Subscribe
