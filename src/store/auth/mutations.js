/*
export function someMutation (state) {
}
*/
export function setAuthState (state, data) {
    state.isAuthenticated = data.isAuthenticated
    state.isReady = data.isReady
  }