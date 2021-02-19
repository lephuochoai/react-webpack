import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import routes from '@/configs/routes'
import Route from '@/configs/route'

import '@/assets/styles/rootStyle.scss'

const App = () => (
  <Router>
    <Switch>
      {routes.map((router, i) => (
        <Route key={i} {...router} />
      ))}
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('application'))

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(App)
}
