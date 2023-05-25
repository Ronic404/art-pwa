import axios, { AxiosInstance } from "axios"
import { baseURL, clientID, clientSecret } from './constants'

let token = ''

export const getToken = async () => {
  const response = await axios.post(`${baseURL}tokens/xapp_token`, {
    client_id: clientID,
    client_secret: clientSecret,
  })

  token = response.data.token
}

export const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'X-Xapp-Token': token,
  },
})

api.interceptors.response.use(undefined, (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 400 && !originalRequest?._retry) {
      originalRequest._retry = true;
      getToken();
      originalRequest.headers['X-Xapp-Token'] = token
      return api(originalRequest)
    }

    return Promise.reject(error);
  }
);
