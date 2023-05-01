import axios from 'axios'

const options = {
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
}

export const instance = axios.create(options)
export const authInstance = axios.create(options)

authInstance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken')
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
