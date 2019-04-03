import api from '@/helpers/api.js'

export const users = () => {
  getId = (id) => {
    return api.get(`/users?id=${id}`).then(({data}) => { return data })
  },
  get = () => {
    return api.get('/users')
  },
  post = (data) => {
    return api.get('/user', data)
  }
}
