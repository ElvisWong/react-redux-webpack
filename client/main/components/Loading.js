import React from 'react'
import CircularProgress from '@material-ui/core/Progress/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid/Grid'

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 3
  }
})

function Loading (props) {
  const {classes} = props
  return (
    <Grid container justify={'center'} alignItems={'center'} className={classes.container} spacing={0}>
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Loading)
