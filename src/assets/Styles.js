import { createGlobalStyle } from 'styled-components'
import './App.css'

export const sizes = {
  desktop: 1300,
  tablet: 1024,
  phone: 768,
}

export const device = Object.keys(sizes).reduce((acc, cur) => {
  acc[cur] = `(max-width: ${sizes[cur]}px)`
  return acc
}, {})
export default device

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  
  @-webkit-keyframes autofill {
    0%,100% {
        color: #666;
        background: transparent;
    }
}

input:-webkit-autofill {
    -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
}
  /* Remove chrome outline blue */
  input:focus, textarea:focus, select:focus,button:focus{
        outline:none !important;
    }
  h1 {
      font-family: Archivo!important;
      font-size: 36px!important;
      font-weight: 600!important;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      color: #49494b!important;
      
    }
    h2 {
      font-family: Archivo!important;
      font-size: 24px!important;
      font-weight: 600!important;
    }
    .hero-container {
      h1 {
      margin-bottom:10px!important;
      }
    }
    h4 {
      margin: 0;
      font-family: Archivo!important;
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: normal;
      color: #49494b!important;
      @media ${device.tablet} {
      font-size: 16px;
    }
    }
  p {
    font-family: Lato!important;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
  }
  a {
      text-decoration: none;
      font-size: 16px;
    }
    
    .row-container {
    font-family: Lato!important;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    }
  
`
