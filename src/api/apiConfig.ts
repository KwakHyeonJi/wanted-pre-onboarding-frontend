import axios from 'axios'

import { ACCESS_TOKEN_KEY } from '../types/auth'

const options = {
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
}

export const instance = axios.create(options)
export const authInstance = axios.create(options)

authInstance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

instance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error.message)
)

authInstance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error.message)
)
