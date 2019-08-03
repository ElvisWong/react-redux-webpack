import React, { Component } from 'react'

import Router from "react-router/Router";
import Switch from 'react-router/Switch'
import Route from 'react-router/Route'
import Redirect from 'react-router-dom/Redirect'
import HomePage from './pages/HomePage'
import history from "./history";

class MainContent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    //todo: change route
    return (
      <Router history={history}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Redirect to={'/'} />
      </Switch>
      </Router>
    )
  }
}

MainContent.propTypes = {}
MainContent.defaultProps = {}

export default MainContent
