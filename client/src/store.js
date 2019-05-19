import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

const url = 'api/';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    currentUser: []
    },
  mutations: {
    retrieveToken(state, token){
      state.token = token
    },
    destroyToken(state) {
      state.token = null
      state.currentUser = []
    },
    setUser(state, user) {
      state.currentUser = user
    }
  },
  getters: {
    isLoggedIn(state){
      return state.token !== null
    }
  },
  actions: {
    //signup
    register(newUser){
      return new Promise((resolve, reject) => {
        axios.post(url + 'userSignup/signup', newUser)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })

    },
    //login
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post(url + 'userSignup/login', credentials)
        .then(response => {
          //retrieve token upon successful login
          const token = response.data.token
          const user = response.data
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          context.commit('retrieveToken', token)
          context.commit('setUser', user)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    //logout
    logoutUser(context){
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        context.commit('destroyToken')
        resolve()
      })
    }
  }
})