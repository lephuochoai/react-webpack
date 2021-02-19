import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import NotFound from '@/pages/not-found'

import {routes, routesSpecialLogged} from '@/configs/routes'
import Route from '@/configs/route'
import store from '@/store'

import axiosClient from '@/apis/axiosClient'
import LocalStorage from '@/utils/storage'

import '@/assets/styles/rootStyle.scss'

axiosClient.defaults.headers.common = {
  Authorization: LocalStorage.has('token') ? `Bearer ${LocalStorage.get('token')}` : ''
}

const ConditionRouter = ({ component: Component, condition, redirect, ...rest }) => (
  <Route
    {...rest}
    render={props => condition() ? <Component {...props} /> : <Redirect to={redirect} />}
  />
)

ConditionRouter.propTypes = {
  component: PropTypes.elementType,
  condition: PropTypes.func.isRequired,
  redirect: PropTypes.string
}

const App = () => {
  return (
    <Router>
      <Switch>
        {routesSpecialLogged.map((router, i) => (
          <ConditionRouter
            {...router}
            key={i} condition={() => !LocalStorage.has('token')}
            redirect="/"
          />
        ))}

        {routes.map((router, i) => {
          if (router.loginRequired) {
            return (
              <ConditionRouter
                {...router}
                key={i}
                condition={() => LocalStorage.has('token')}
                redirect="/login"
              />
            )
          } else {
            return <Route key={i} {...router} />
          }
        })}
        <Route path='*' exact component={NotFound} />
      </Switch>
    </Router>
  )
}

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Main />, document.getElementById('application'))

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(App)
}
