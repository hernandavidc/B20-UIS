import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

const baseURL = 'http://localhost:3000';
axios.defaults.baseURL = baseURL;

//TODO interceptor para controlar responses en status 401

Vue.use(VueAxios, axios);