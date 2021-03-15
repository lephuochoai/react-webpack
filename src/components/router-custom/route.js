import React from 'react'
import NProgress from 'nprogress'
import { Route } from 'react-router-dom'

import 'nprogress/nprogress.css'

const RouterProgress = (props) => {
  React.useEffect(() => {
    NProgress.start()

    return NProgress.done()
  })

  return <Route {...props} />
}

export default RouterProgress
