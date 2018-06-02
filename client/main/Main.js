import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { connect } from 'react-redux'
import Footer from './components/Footer'
import TopNavBar from './components/TopNavBar'
import { closeSnackBar, onSnackBarClose, onSnackBarExited } from './actions/app'
import MainContent from './MainContent'
import withRouter from 'react-router-dom/withRouter'
import Snackbar from '@material-ui/core/Snackbar/Snackbar'
import { SNACK_BAR_AUTO_HIDE_DURATION } from './configs/app'

const styles = theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 3
    },
    padding: theme.spacing.unit,
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  toolbar: theme.mixins.toolbar,
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  }
})

class Main extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {classes, isSnackBarOpen, onSnackBarClose, snackBarMessage} = this.props

    return (
      <div className={classes.root}>
        <TopNavBar />
        <div className={classes.container}>
          <div className={classes.toolbar} />
          <MainContent />
        </div>
        <Footer />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={isSnackBarOpen}
          autoHideDuration={SNACK_BAR_AUTO_HIDE_DURATION}
          onClose={onSnackBarClose}
          onExited={onSnackBarExited}
          key={snackBarMessage}
          message={snackBarMessage}
        />
      </div>
    )
  }
}

Main.propTypes = {}
Main.defaultProps = {}

export default withRouter(connect(state => ({
  isSnackBarOpen: state.app.isSnackBarOpen,
  snackBarMessage: state.app.snackBarMessage
}), {
  onSnackBarClose,
  onSnackBarExited
})(withStyles(styles)(Main)))