import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import axiosClient from '@/apis/axiosClient'
import LocalStorage from '@/utils/storage'
import { message } from 'antd'

import '@/assets/styles/root-style.scss'
import '@/assets/styles/antd.less'
import '@/locales/i18n'
import Routes from './configs/routes'

message.config({
  top: 10,
  maxCount: 3
})

axiosClient.defaults.headers.common = {
  Authorization: LocalStorage.has('token') ? `Bearer ${LocalStorage.get('token')}` : ''
}

const Main = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

ReactDOM.render(<Main />, document.getElementById('application'))

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(Main)
}
