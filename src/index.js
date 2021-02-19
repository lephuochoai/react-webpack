import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '@/configs/routes'
import Route from '@/configs/route'
import store from '@/store'

import axiosClient from '@/apis/axiosClient'
import LocalStorage from '@/utils/storage'

import '@/assets/styles/rootStyle.scss'

axiosClient.defaults.headers.common = {
  Authorization: LocalStorage.has('token') ? `Bearer ${LocalStorage.get('token')}` : ''
}

const App = () => (
  <Router>
    <Switch>
      {routes.map((router, i) => (
        <Route key={i} {...router} />
      ))}
    </Switch>
  </Router>
)

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Main />, document.getElementById('application'))

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(App)
}
