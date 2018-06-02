import 'babel-polyfill'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../theme'

import JssProvider from 'react-jss/lib/JssProvider'
import { createGenerateClassName } from '@material-ui/core/styles'
import Entry from './Entry'
import { Provider } from 'react-redux'
import store from './store'
import history from './history'
import ConnectedRouter from 'react-router-redux/ConnectedRouter'
import IntlProvider from 'react-intl-redux/src/components/IntlProvider'
import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'

require('moment')

addLocaleData([...enLocaleData, ...zhLocaleData])

const generateClassName = createGenerateClassName()

ReactDOM.render(
  <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <IntlProvider>
          <ConnectedRouter history={history}>
            <Entry />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>
    </MuiThemeProvider>
  </JssProvider>
  , document.getElementById('app'))