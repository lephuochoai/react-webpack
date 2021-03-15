import React from 'react'
import PropTypes from 'prop-types'
import { ContainerBox } from './Container.styles'

function Container({ children }) {
  return (
    <ContainerBox>
      <main>
        {children}
      </main>
    </ContainerBox>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container