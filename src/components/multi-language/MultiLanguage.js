import { Dropdown, Menu } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ItemLanguage, MenuItem, MenuLanguages, MultiLanguageBox, TitleChange } from './MultiLanguage.styles'

const languages = [
  {
    code: 'vi',
    icon: '/flags/vn.svg'
  },
  {
    code: 'en',
    icon: '/flags/us.svg'
  }
]

function MultiLanguage() {
  const { t, i18n } = useTranslation()

  const onChangeLanguage = (lang) => i18n.changeLanguage(lang)

  const menu = (
    <MenuLanguages>
      <TitleChange disabled>
        Choose language
      </TitleChange>
      <MenuItem>
        <ItemLanguage onClick={() => onChangeLanguage('vi')}>
          <div className="icon__language">
            <img src="/flags/vn.svg" alt="" />
          </div>
          <div className="name__language">
            {t('vietnamese')}
          </div>
        </ItemLanguage>
      </MenuItem>
      <MenuItem>
        <ItemLanguage onClick={() => onChangeLanguage('en')}>
          <div className="icon__language">
            <img src="/flags/us.svg" alt="" />
          </div>
          <div className="name__language">
            {t('english')}
          </div>
        </ItemLanguage>
      </MenuItem>
    </MenuLanguages>
  )

  return (
    <MultiLanguageBox>
      <Dropdown overlay={menu} placement="bottomRight">
        <div className="icon__flag-active">
          <img src={languages.find((lang) => lang.code === i18n.language).icon} alt=""/>
        </div>
      </Dropdown>
    </MultiLanguageBox>
  )
}

export default MultiLanguage