import styled from 'styled-components'
import { Menu } from 'antd'

export const MenuItem = styled(Menu.Item)`
  transition: all 0.4s;

  &:hover {
    background-color: #476ACB;
    color: #ffffff;
  }
`

export const MenuLanguages = styled(Menu)`
  padding: 0;
`

export const TitleChange = styled(Menu.Item)`
  background-color: #423F50;
  padding: 20px 12px;
  text-align: center;
  color: #ffffff;
  cursor: default;

  &:hover {
    background-color: #423F50;
    color: #ffffff;
    cursor: default;
  }
`

export const ItemLanguage = styled.div`
  display: flex;
  align-items: center;

  .icon__language {
    margin-right: 12px;

    img {
      width: 40px;
    }
  }

  .name__language {
    font-size: 14px;
    min-width: 100px;
  }
`

export const MultiLanguageBox = styled.div``