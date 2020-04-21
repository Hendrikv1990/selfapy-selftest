import React from 'react'
import { useIntl } from 'react-intl'
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
  .column-container {
    flex: 0 1 100%;
    @media ${device.tablet} {
      flex: 0 1 100%;
    }
  }
  .row-container {
    display: flex;
    width: 100%;
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
    color: #ff5151;
    font-size: 14px;
  }
  input {
    width: 100%;
    font-size: 14px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    border-radius: 4px;
    border: solid 2px #bab5b5;
    top: -20px;
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
      {error ? <p className="field-error">{error}</p> : null}
    </React.Fragment>
  )
}

export const Subscribe = (props) => {
  const intl = useIntl()

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
              label={intl.messages['form.email']}
              value={props.values['email']}
            />
          </div>
        </div>
      </div>
    </Styling>
  )
}

export default Subscribe
