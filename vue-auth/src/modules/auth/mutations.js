export function setUser(state, playload){
    state.userDate = playload.user;
    state.token = playload.token;
    state.isLogged = true;
    state.error = false;
    state.errorMessage =  "";
}

export function logout(state){
    state.userDate = null;
    state.token = null;
    state.isLogged = false;
}

export function setError(state, error){
    state.error = true;
    state.errorMessage = error;
    state.userData = null;
    state.token = null;
    state.isLogged = false;
}