import axios from 'axios'

export const state = () => ({
  products: [],
  clients: [],
  snackbarText: '',
  snackbarColor: '',
  filePath: '',
  isLoading: false,
})

export const mutations = {
  SET_PRODUCT_INFO(state, value) {
    state.products = value
  },
  SET_CLIENT_INFO(state, value) {
    state.clients = value
  },
  SET_IS_LOADING(state, value) {
    state.isLoading = value
  },

  SHOW_SNACKBAR(state, value) {
    state.snackbarText = value.text
    state.snackbarColor = value.color
  },
  SET_RESUME_FILE(state, value) {
    state.filePath = value
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

  createNewContact(context, payload) {
    context.commit('SET_IS_LOADING', true)
    axios
      .post('https://garments-maker-api.herokuapp.com/api/v1/contacts', payload)
      .then((res) => {
        context.commit('SHOW_SNACKBAR', {
          text: 'Message sent successfully',
          color: 'success',
        })
      })
      .catch((err) => {
        if (err.response.data.message) {
          context.commit('SHOW_SNACKBAR', {
            text: `${err.response.data.message}`,
            color: 'error',
          })
        } else {
          context.commit('SHOW_SNACKBAR', {
            text: 'Something went wrong. Please try again',
            color: 'error',
          })
        }
      })
      .finally(() => context.commit('SET_IS_LOADING', false))
  },

  async uploadResume(context, payload) {
    const formData = new FormData()
    formData.append('file', payload)
    formData.append('upload_preset', 'ml_default')
    return await axios
      .post('https://api.cloudinary.com/v1_1/dijk4ytvg/raw/upload', formData)
      .then((res) => {
        console.log(res.data)
        context.commit('SET_RESUME_FILE', res.data.url)
        return true
      })
      .catch((err) => {
        context.commit('SHOW_SNACKBAR', {
          text: 'Something went wrong while uploading file.',
          color: 'error',
        })
        return false
      })
  },

  addCareerInfo(context, payload) {
    context.commit('SET_IS_LOADING', true)
    payload.filePath = context.state.filePath
    console.log(payload)
    axios
      .post('https://garments-maker-api.herokuapp.com/api/v1/careers', payload)
      .then((res) => {
        context.commit('SHOW_SNACKBAR', {
          text: 'Message sent successfully',
          color: 'success',
        })
      })
      .catch((err) => {
        if (err.response.data.message) {
          context.commit('SHOW_SNACKBAR', {
            text: `${err.response.data.message}`,
            color: 'error',
          })
        } else {
          context.commit('SHOW_SNACKBAR', {
            text: 'Something went wrong. Please try again',
            color: 'error',
          })
        }
      })
      .finally(() => context.commit('SET_IS_LOADING', false))
  },
}
