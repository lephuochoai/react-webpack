import { BREAKPOINT } from '@/commons/styles'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import React from 'react'
import { BoxHeader, ControlHeader, IconMenu } from './Header.styles'
import MultiLanguage from '../multi-language/MultiLanguage'

function Header() {
  const { width } = useWindowDimensions()

  return (
    <BoxHeader>
      <div className="icon__togged">
        {
          width <= BREAKPOINT.XL && (
            <IconMenu>
              <div className="icon-menu" />
            </IconMenu>
          )
        }
      </div>
      <ControlHeader>
        <MultiLanguage />
      </ControlHeader>
    </BoxHeader>
  )
}

export default Header