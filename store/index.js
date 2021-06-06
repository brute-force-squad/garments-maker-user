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
    console.log('called')
    axios
      .get('https://garments-maker-api.herokuapp.com/api/v1/products')
      .then((res) => {
        console.log(res)
        context.commit('SET_PRODUCT_INFO', res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getClients(context) {
    axios
      .get('https://garments-maker-api.herokuapp.com/api/v1/clients')
      .then((res) => {
        console.log(res)
        context.commit('SET_CLIENT_INFO', res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
