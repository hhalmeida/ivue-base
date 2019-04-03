import axios from 'axios'

const m = {
  'uri': 'http://localhost:8080/',
}

const API = axios.create({
  baseURL: m.uri,
  headers: {'token': ''}
})

// Interceptor.
API.interceptors.request.use(function (config) {
  const newToken = window.localStorage.token
  if (newToken != null) {
    config.headers.token = newToken
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

API.interceptors.response.use({})

export default API
