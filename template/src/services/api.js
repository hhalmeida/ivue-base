import axios from 'axios'

const m = { 
    'uri':'localhost:8080',
}

const API = axios.create({
    baseUrl: m.uri,
    headers:{}
})

// Interceptor.
API.interceptors.request.use({})

API.interceptors.response.use({})