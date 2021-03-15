import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Route from '@/components/router-custom/route'
import NotFound from '@/pages/not-found'
import {routes, routesSpecialLogged} from '@/commons/routes'
import LocalStorage from '@/utils/storage'
import Header from '@/components/header/Header'

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

const Routes = () => {
  const renderAuthRoutes = () => (
    <>
      <Header />
      <Switch>
        {routes.map((router, i) => <Route key={i} {...router} />)}
      </Switch>
    </>
  )

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

        <ConditionRouter
          component={renderAuthRoutes}
          condition={() => LocalStorage.has('token')}
          redirect="/login"
        />
        <Route path='*' exact component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
