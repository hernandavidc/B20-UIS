import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

const baseURL = 'http://localhost:3000';
axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(
    (config) => {
        const storeLocalStorage = JSON.parse(window.localStorage.getItem('vuex'));
        if(storeLocalStorage.auth.isLogged){
            config.headers['token-b20'] = storeLocalStorage.auth.token
        }
        return config
    },
    err => {
        return Promise.reject(err);
    }
)

axios.interceptors.response.use(res => {
    return res
}, (err) => {
    if(err.response.status == 401 || err.response.statusCode == 401){
        window.location = '/login'
    }else {
        return Promise.reject(err);
    }
})

Vue.use(VueAxios, axios);