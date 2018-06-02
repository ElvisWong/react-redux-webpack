import React, { Component } from 'react'
import Fade from '@material-ui/core/Fade/Fade'
import Grid from '@material-ui/core/Grid/Grid'
import { bindActionCreators } from 'redux'
import withStyles from '@material-ui/core/styles/withStyles'
import { connect } from 'react-redux'

const styles = theme => ({})

class HomePage extends Component {
  render () {
    return (
      <Fade in={true}>
        <Grid container>
        </Grid>
      </Fade>
    )
  }
}

export default connect(state => ({}), (dispatch) => {
  return {
    ...bindActionCreators({}, dispatch), dispatch
  }
})(withStyles(styles)(HomePage))
