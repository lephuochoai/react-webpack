import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { BoxContainer } from './Box.styles'

function Box({ title='React Base', children }) {
  return (
    <BoxContainer>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </BoxContainer>
  )
}

Box.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Box