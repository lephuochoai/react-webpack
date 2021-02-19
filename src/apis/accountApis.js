import axiosClient from './axiosClient'

const accountApis = {
  login: (payload) => {
    return axiosClient.post('/login', payload)
  }
}

export default accountApis
