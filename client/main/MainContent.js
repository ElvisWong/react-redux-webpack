import React, { Component } from 'react'

import Switch from 'react-router/Switch'
import Route from 'react-router/Route'
import Redirect from 'react-router-dom/Redirect'
import HomePage from './pages/HomePage'

class MainContent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    //todo: change route
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Redirect to={'/'} />
      </Switch>
    )
  }
}

MainContent.propTypes = {}
MainContent.defaultProps = {}

export default MainContent
