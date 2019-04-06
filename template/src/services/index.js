import api from '@/helpers/api.js'

// Examples of mount services for use how global.
export default{
  getPeople () {
    return api.get('peoples');
  },
  async getBurguer (opt) {
    const { data } = await api.get('burguer')
    return  data
  }
}
