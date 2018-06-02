import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { intlReducer } from 'react-intl-redux'

import app from './reducers/app'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  app,
  intl: intlReducer
})