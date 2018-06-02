import React from 'react'
import Route from 'react-router-dom/Route'
import Typography from '@material-ui/core/Typography/Typography'
import Switch from 'react-router-dom/Switch'
import { connect } from 'react-redux'
import withRouter from 'react-router-dom/withRouter'

const TopNavBarTitle = ({messages, userData}) => {
  return (
    <Switch>
      <Route exact path="/" component={(props) => {
        return (<Typography variant="title" color="inherit"
                            noWrap>{messages.top_nav_bar_home}</Typography>)
      }} />
    </Switch>
  )
}
export default withRouter(connect(state => ({
  messages: state.intl.messages
}), {})(TopNavBarTitle))