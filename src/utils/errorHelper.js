
import Message from '@/components/message'
import i18n from '@/locales/i18n'

function errorHelper(err) {
  const messageError = err?.response?.data?.message || err.message

  if (messageError) {
    return Message.error(i18n.t(`error.${messageError}`))
  }
  return Message.error(i18n.t('error.system_error'))
  
}
export default errorHelper
