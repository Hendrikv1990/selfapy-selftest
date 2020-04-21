import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { FieldArray } from 'formik'
import React from 'react'
// import { ReactComponent as AddSVG } from '../assets/add.svg'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { device } from '../assets/Styles'
import Start from './Start'

const StyledFormControlLabel = withStyles({
  root: {},
  label: {
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: 'normal',
  },
})(FormControlLabel)

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
})

const Styling = styled.div.attrs({
  className: 'form-container',
})`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .row-container {
    display: flex;
    width: 100%;
  }
  .column-container {
    flex: 0 1 100%;
    @media ${device.tablet} {
      flex: 0 1 100%;
    }
  }
  .field-wrapper {
    margin-bottom: 45px;
    position: relative;
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
    .field-error {
      position: absolute;
      color: #ff5151;
      font-size: 14px;
    }
  }

  .width-50 {
    flex: 0 1 50%;
  }
  .width-100 {
    flex: 0 1 100%;
  }
  .width-auto {
    flex: 0 1 auto;
  }
  .width-30 {
    flex: 0 1 30%;
  }
  .width-70 {
    flex: 0 1 70%;
  }

  .container {
    span {
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.9;
      letter-spacing: normal;
    }
  }
`

const StyledRadio = (props) => {
  const classes = useStyles()

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  )
}

export const Part = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  parts,
}) => {
  return (
    <Styling>
      <Start />
      <div className="row-container">
        <h3>
          <FormattedMessage id="form.part.h1">
            {(message) => message}
          </FormattedMessage>
        </h3>
      </div>
      {parts.map((part, index) => {
        return (
          <div className="row-container" key={index}>
            <div className="field-wrapper width-100">
              <h4>{part.question}</h4>
              <RadioGroup aria-label={part.name}>
                <FieldArray
                  name={part.name}
                  render={(arrayHelpers) => (
                    <div>
                      {part.answers.map((ans) => (
                        <div key={ans.value}>
                          <StyledFormControlLabel
                            control={
                              <StyledRadio
                                name={part.name}
                                value={ans.value}
                                checked={values[part.name] === ans.value}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            }
                            label={ans.label}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                />
              </RadioGroup>
              {errors[part.name] && touched[part.name] && (
                <div className="field-error">{errors[part.name]}</div>
              )}
            </div>
          </div>
        )
      })}
    </Styling>
  )
}

export default Part
