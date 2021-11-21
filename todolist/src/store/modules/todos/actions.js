import Vue from 'vue';

export async function fetchTodos({ commit }){
    await Vue.axios.get('/todos').then( ({ data }) => {
        commit('setTodos', data);
    }).catch(err => {
        commit('todosError', err.message);
    }).finally(() => {
        console.log("Petición de fetchTodos resuelta");
    });
}

export async function addTodos({ commit, dispatch }, todo){
    await Vue.axios.post('/todos', {
        id: Date.now(),
        text: todo.text,
        done: false
    }).catch( err => {
        commit('todosError', err.message);
    }).finally(() => {
        dispatch('fetchTodos');
        console.log("Petición de addTodos resuelta");
    });
}

export async function updateTodo({ commit }, todo){
    await Vue.axios.put(`/todos/${ todo.id }`, {
        id: todo.id,
        text: todo.text,
        done: todo.done
    }).catch( err => {
        commit('todosError', err.message);
    }).finally(() => {
        console.log("Petición de updateTodo resuelta");
    });
}

export async function updateStatusTodo({ commit, dispatch }, todo){
    await Vue.axios.put(`/todos/${ todo.id }`, {
        id: todo.id,
        text: todo.text,
        done: ! todo.done
    }).catch( err => {
        commit('todosError', err.message);
    }).finally(() => {
        dispatch('fetchTodos');
        console.log("Petición de updateStatusTodo resuelta");
    });
}

export async function deleteTodo({ commit, dispatch }, todo){
    await Vue.axios.delete(`/todos/${ todo.id }`)
                    .catch( err => {
                        commit('todosError', err.message);
                    }).finally(() => {
                        dispatch('fetchTodos');
                        console.log("Petición de deleteTodo resuelta");
                    });
}