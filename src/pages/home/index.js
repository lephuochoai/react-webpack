import React from 'react'
import Box from '@/components/box'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t, i18n } = useTranslation()

  const onChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Box title="Home">
      <Link to="/">{t('hello')}</Link>
      <Link to="/login">Login</Link>
      <div>
        <button onClick={() => onChangeLanguage('en')}>En</button>
        <button onClick={() => onChangeLanguage('vi')}>Vi</button>
      </div>
    </Box>
  )
}

export default Home
