import createHistory from 'history/createBrowserHistory'

const history = createHistory({
  basename: '/main'
})

export default history