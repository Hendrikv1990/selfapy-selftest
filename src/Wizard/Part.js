import React from 'react'
import { useIntl } from 'react-intl'
import Select from 'react-select'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { device } from '../assets/Styles'
import Start from './Start'

const Styling = styled.div.attrs({
  className: 'form-container',
})`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .part-container {
    padding: 1rem 2rem 0rem;
    background: #f5f4f1;
  }
  .row-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 2rem;
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
    @media ${device.tablet} {
      flex: 0 1 100%;
    }
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
  .answer-container {
    margin: 0;
  }
  .question-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    .question {
      width: 90%;
    }
  }

  .react-select__control {
    font-family: Archivo;
    font-size: 14px;
    line-height: 1.43;
    border-style: none;
    border-radius: 4px;
    border: solid 2px #bab5b5;
    box-shadow: none;
    transition: border 500ms ease-in-out;
    background: transparent;
    .react-select__value-container {
      padding: 4px;
    }
    .react-select__indicators {
      span {
        display: none;
      }
    }
    &:hover {
      cursor: pointer;
      padding-bottom: 0;
      border: solid 2px #336670;
    }
  }
  .react-select__menu {
    border-radius: 0;
    box-shadow: none;
    margin-top: 0;
    background-color: #fff;
    .react-select__menu-list {
      padding-bottom: 0;
      padding-top: 0;
      .react-select__option {
        border-bottom: 1px solid transparent;
        color: #55706c;
      }
      .react-select__option--is-focused {
        cursor: pointer;
        background-color: inherit;
        color: #222;
      }
      .react-select__option--is-selected {
        background-color: inherit;
        color: #222;
      }
    }
  }
`

export const Part = React.memo(
  ({
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    parts,
    setFieldTouched,
    setFieldValue,
  }) => {
    const intl = useIntl()

    return (
      <Styling>
        <Start />
        <div className="part-container">
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
                <div className="field-wrapper width-50 question-wrapper">
                  <h4 className="question">{part.question}</h4>
                </div>
                <div className="field-wrapper width-50 answer-container">
                  <Select
                    id={part.name}
                    onBlur={() => setFieldTouched(part.name, true)}
                    onChange={(value) => {
                      return setFieldValue(part.name, value)
                    }}
                    name={part.name}
                    options={part.answers}
                    value={values[part.name]}
                    classNamePrefix={`${
                      errors[part.name] && touched[part.name] ? 'error' : ''
                    } react-select`}
                    placeholder={intl.messages['form.select.placeholder']}
                    // menuIsOpen
                    isSearchable={false}
                  />
                  {errors[part.name] && touched[part.name] && (
                    <div className="field-error">{errors[part.name]}</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Styling>
    )
  },
)

export default Part
