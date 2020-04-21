import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { device, sizes } from './assets/Styles'

const Styling = styled.div.attrs({
  className: 'footer-wrapper',
})`
  .footer-container {
  }
  .hidden {
    visibility: hidden;
    display: none;
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .pagination {
    margin: 0 auto;
  }
  .item {
    div {
      display: inline-block;
    }
    @media ${device.phone} {
      display: flex;
      justify-content: center;
      flex: 0 1 100%;
      margin-top: 1rem;
    }
  }

  .pagination-wrapper {
    .pagination-container {
      font-size: 16px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      color: #87898f;
    }
  }
`

export const Footer = React.memo(({ page, children, previous, width }) => {
  const Pagination = () => {
    return (
      <div className="item pagination">
        <div className="pagination-wrapper">
          <div className="pagination-container">
            {page >= 0 && `${page + 1}/${children.length}`}
          </div>
        </div>
      </div>
    )
  }

  const SubmitButton = ({ name, color }) => {
    console.log(color)

    const Button = styled.button`
      font-family: Archivo;
      width: 150px;
      height: 48px;
      border-radius: 24px;
      border: solid 2px #336670;
      background: #fff;
      color: #336670;
      line-height: 1.5;
      font-weight: bold;
      &:hover,
      &:focus {
        cursor: pointer;
      }
    `

    return (
      <div className="item">
        <Button color={color} type="submit" className="button">
          <FormattedMessage id={name}>{(message) => message}</FormattedMessage>
        </Button>
      </div>
    )
  }

  const SimpleButton = ({ name, className }) => {
    const Button = styled.button`
      font-family: Archivo;
      width: 150px;
      height: 48px;
      border-radius: 24px;
      border: solid 2px #336670;
      background: #fff;
      color: #336670;
      line-height: 1.5;
      font-weight: bold;
      &:hover,
      &:focus {
        color: #336670;

        cursor: pointer;
      }
    `
    return (
      <div className={`item ${className}`}>
        <Button type="button" onClick={previous} className="button">
          <FormattedMessage id={name}>{(message) => message}</FormattedMessage>
        </Button>
      </div>
    )
  }

  return (
    <Styling>
      {/* We show this hidden component on Desktop and Tablet only */}
      {page === 1 && width > sizes.phone && (
        <SimpleButton className="hidden" name="button.start" />
      )}
      {/* {page === 0 && <SubmitButton name="button.start" />} */}
      {page > 0 && page < 2 && <SimpleButton name="button.back" />}
      <Pagination />
      {page >= 0 && page < 2 && <SubmitButton name="button.next" />}
    </Styling>
  )
})
export default Footer
