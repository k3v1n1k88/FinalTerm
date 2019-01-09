import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from './../config.json'

var URL = config.url;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {},
        API_KEY: config.api_key,
        permission: null,
    },
    mutations: {
      auth_request(state){
        state.status = 'loading'
      },
      auth_success(state, {token, user, permission}){
        state.status = 'success'
        state.token = token;
        state.user = user;
        state.permission = permission;
          console.log('state permission:'+state.permission);
          console.log('permission'+permission);
      },
      auth_error(state){
        state.status = 'error'
      },
      logout(state){
        state.status = ''
        state.token = ''
      },
    },
    actions: {
      login({ commit }, {username, password}) {
        // var key = state.api_key;
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios.post(URL.login,{
              username: username,
              password: password
           })
            .then(resp => {
                var token = resp.data.token;
                var user = resp.data.account_name;
                var permission = resp.data.permission;
                
                // console.log(resp);
                // console.log("permission:" + permission);
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', {token, user, permission})
                resolve(resp);
            })
            .catch(err => {
                commit('auth_error');
                localStorage.removeItem('token');
                throw err;
            })
        })
      },
      logout({commit}){
        return new Promise((resolve, reject) => {
          commit('logout')
          localStorage.removeItem('token');
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      }
    },
    getters: {
      isLoggedIn: state => !!state.token,
      authStatus: state => state.status,
      isAuthenticated: state => state.permission == 1 && state.token?true:false
    }
})

