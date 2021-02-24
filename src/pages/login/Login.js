import React from 'react'
import Box from '@/components/box'
import { Button, Input, Tooltip } from 'antd'
import { BoxForm, StyleForm, Label } from './Login.styles'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import yup from '@/utils/yup'
import accountApis from '@/apis/accountApis'
import { useDispatch } from 'react-redux'
import { login } from '@/store/slices/accountSlice'
import Message from '@/components/message'
import errorHelper from '@/utils/errorHelper'
import LocalStorage from '@/utils/storage'
import { useHistory } from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

function Login() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })
  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmit = (values) => {
    setIsLoading(true)
    return accountApis.login(values)
      .then((res) => {
        setIsLoading(false)
        if (res.error === 0) {
          const payload = {
            token: res.data.access_token,
            accountInfo: {
              email: res.data.info.email,
              firstName: res.data.info.first_name,
              lastName: res.data.info.last_name,
            }
          }

          LocalStorage.set('token', res.data.access_token)
          LocalStorage.set('info', res.data.info)
          dispatch(login(payload))
          history.push('/')
        } else {
          throw res
        }
      })
      .catch(err => {
        setIsLoading(false)
        errorHelper(err)
      })
  }

  return (
    <Box title="Login">
      <BoxForm>
        <StyleForm onSubmit={handleSubmit(onSubmit)}>
          <div className="login__title">
            {t('login')}
          </div>
          <div className="login__logo">
            <img src="/favicon.ico" alt="logo"/>
          </div>
          <div className="login__form-detail">
            <div className="field">
              <Label>{t('email')}</Label>
              <Tooltip color="#cf1322"
                placement="top"
                title={errors.email?.message}
              >
                <Controller
                  name="email"
                  control={control}
                  as={Input}
                  className={
                    classNames('field-input', {
                      'error-field-input': !!errors.email?.message
                    })
                  }
                  defaultValue="phuochoaileqn@gmail.com"
                  placeholder="Enter your email"
                />
              </Tooltip>
            </div>
            <div className="field">
              <Label>{t('password')}</Label>
              <Tooltip
                color="#cf1322"
                placement="top"
                title={errors.password?.message}
              >
                <Controller
                  name="password"
                  control={control}
                  defaultValue="123123"
                  as={Input.Password}
                  className={
                    classNames('field-input', {
                      'error-field-input': !!errors.password?.message
                    })
                  }
                  placeholder="Enter your password"
                />
              </Tooltip>
            </div>
            <div className="field btn-login">
              <Button
                type="primary"
                htmlType="submit"
                block
                shape="round"
                loading={isLoading}
              >
                {t('login')}
              </Button>
            </div>
          </div>
        </StyleForm>
      </BoxForm>
    </Box>
  )
}

export default Login