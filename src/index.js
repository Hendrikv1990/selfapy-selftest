import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { logger } from 'redux-logger'
import App from './App'
import rootReducer from './subscribeReducer'
import * as serviceWorker from './serviceWorker'

const middleware = []

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose,
  ),
)
const rootElement = document.getElementById('root')
// if (process.env.NODE_ENV !== 'production') {
//   import('why-did-you-update').then((module) => {
//     module.whyDidYouUpdate(React)
//   })
// }

const index = (
  <Provider store={store}>
    <App />
  </Provider>
)
// https://web.dev/prerender-with-react-snap/
if (rootElement.hasChildNodes()) {
  hydrate(index, rootElement)
} else {
  render(index, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
