import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import history from './history'
import reducers from './reducers'
import { DEFAULT_LOCALE } from './configs/app'

const middlewares = [thunk]

let composeEnhancers = compose

if (_DEV) {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }
}

const initialState = {
  intl: {
    defaultLocale: DEFAULT_LOCALE,
    locale: DEFAULT_LOCALE
  }
}

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares, routerMiddleware(history)))
)

export default store

if (_DEV) {
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducers = require('./reducers').default
      store.replaceReducer(nextReducers)
    })
  }
}