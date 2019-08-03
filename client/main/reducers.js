import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import { intlReducer } from 'react-intl-redux'

import app from './reducers/app'

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  app,
  intl: intlReducer
})