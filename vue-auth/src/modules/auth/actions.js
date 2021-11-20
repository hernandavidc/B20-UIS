import Vue from 'vue';

export async function signIn({ commit }, user){
    commit('setLoading', true, { root: true })
    return Vue.axios.post('/api/users/login', user).then(res => {
        commit('setUser', res.data);
    }).catch(err => {
        commit('setError', err.msg);
    }).finally(() => {
        commit('setLoading', false, { root: true })
    })
}