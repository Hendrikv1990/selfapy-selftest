import React from 'react'
import { hydrate, render } from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
// if (process.env.NODE_ENV !== 'production') {
//   import('why-did-you-update').then((module) => {
//     module.whyDidYouUpdate(React)
//   })
// }
// https://web.dev/prerender-with-react-snap/
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
