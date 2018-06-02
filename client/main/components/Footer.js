import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid/Grid'

const SIDE_MENU_WIDTH = 256
const FOOTER_HEIGHT = 33

const styles = theme => {
  return ({
    container: {
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      lineHeight: `${FOOTER_HEIGHT}px`,
      background: theme.palette.background.paper,
      // position: 'absolute',
      // bottom: 0,
      width: '100%',
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      [theme.breakpoints.up('md')]: {
        paddingLeft: `${theme.spacing.unit * 2 + SIDE_MENU_WIDTH}px`
      }
    }
  })
}

function Footer ({classes}) {
  return (
    <Grid container className={classes.container} spacing={0} justify={'flex-end'} alignItems={'center'}>
      <Grid item>
        <Typography variant="caption">
          Copyright
        </Typography>
      </Grid>
    </Grid>
  )
}

Footer.propTypes = {}
Footer.defaultProps = {}

export default withStyles(styles)(Footer)
