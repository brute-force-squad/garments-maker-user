import axios from 'axios'

export const state = () => ({
  products: [],
  clients: [],
})

export const mutations = {
  SET_PRODUCT_INFO(state, value) {
    state.products = value
  },
  SET_CLIENT_INFO(state, value) {
    state.clients = value
  },
}

export const actions = {
  getProducts(context) {
    axios
      .get('/products')
      .then((res) => {
        context.commit('SET_PRODUCT_INFO', res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getClients(context) {
    axios
      .get('/clients')
      .then((res) => {
        context.commit('SET_CLIENT_INFO', res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
