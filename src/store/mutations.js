export default {
  appendUser: (state, { cat, user }) => {
    state[cat].push(user)
  }
}
