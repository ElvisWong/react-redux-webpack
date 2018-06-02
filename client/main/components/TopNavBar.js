import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import withStyles from '@material-ui/core/styles/withStyles'
import { connect } from 'react-redux'
import withRouter from 'react-router-dom/withRouter'
import TopNavBarTitle from './TopNavBarTitle'

const styles = theme => ({
  titleContainer: {
    flex: 1
  }
})

class TopNavBar extends Component {

  render () {
    const {classes, messages} = this.props

    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.titleContainer}>
            <TopNavBarTitle />
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

TopNavBar.propTypes = {}
TopNavBar.defaultProps = {}

export default withRouter(connect(state => ({
  messages: state.intl.messages
}), {})(withStyles(styles)(TopNavBar)))