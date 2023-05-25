import axios, { AxiosInstance } from 'axios'
import { baseURL, clientID, clientSecret } from './constants'

const LS_TOKEN = 'X-Xapp-Token'

export const getToken = async () => {
  const response = await axios.post(`${baseURL}tokens/xapp_token`, {
    client_id: clientID,
    client_secret: clientSecret,
  })

  return response
}

export const api: AxiosInstance = axios.create({ baseURL })

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LS_TOKEN)

    if (token) {
      config.headers[LS_TOKEN] = token
    }

    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const response = await getToken()

      if (response.status === 201) {
          localStorage.setItem(LS_TOKEN, response.data.token)
          return api(originalRequest)
      }
    }

    return Promise.reject(error)
  }
)
