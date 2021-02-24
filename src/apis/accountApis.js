import axiosClient from './axiosClient'

const accountApis = {
  login: (payload) => axiosClient.post('/v1/sign-in', payload)
}

export default accountApis
