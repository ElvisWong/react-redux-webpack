import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Main from './Main'
import withStyles from '@material-ui/core/styles/withStyles'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import { loadAppUser, setLocale } from './actions/app'
import withRouter from 'react-router-dom/withRouter'

const styles = theme => ({
  '@global': {
    html: {
      position: 'relative',
      height: '100%'
    },
    body: {
      minHeight: '100%',
      display: 'flex'
    },
    '#app': {
      flex: 1,
      display: 'flex',
      overflow: 'hidden'
    }
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class Entry extends Component {

  constructor (props) {
    super(props)
    this.props.setLocale()
    // this.props.loadAppUser()
  }

  render () {
    const {classes} = this.props

    // show loading until loaded of user object
    // if (!this.props.user) {
    //   return <div className={classes.loadingContainer}>
    //     <CircularProgress />
    //   </div>
    // }

    // mount the main components once loaded.
    return (<Main />)
  }
}

const connectedEntry = withRouter(connect(state => ({
  user: state.app.user
}), {
  loadAppUser,
  setLocale
})(Entry))

const styledEntry = withStyles(styles)(connectedEntry)

export default hot(module)(styledEntry)
