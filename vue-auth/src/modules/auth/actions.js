import Vue from 'vue';

export async function signIn({ commit }, user){
    //TODO Loader
    return Vue.axios.post('/api/users/login', user).then(res => {
        commit('setUser', res);
    }).catch(err => {
        commit('setError', err.msg);
    })
}