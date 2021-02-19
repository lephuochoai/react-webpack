import React from 'react'
import { Helmet } from 'react-helmet'

import PropTypes from 'prop-types'

function Box({ title='React Base', children }) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  )
}

Box.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Box