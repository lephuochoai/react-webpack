import React from 'react'
import Box from '@/components/box/Box'
import { useTranslation } from 'react-i18next'
import TitleHeader from '@/components/title-page/TitleHeader'
import Container from '@/components/container/Container'

function Home() {
  const { t, i18n } = useTranslation()

  const onChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Box title="Home">
      <TitleHeader />
      <Container>
        <button onClick={() => onChangeLanguage('en')}>En</button>
        <button onClick={() => onChangeLanguage('vi')}>Vi</button>
      </Container>
    </Box>
  )
}

export default Home
