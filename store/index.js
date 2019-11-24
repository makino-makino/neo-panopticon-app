export const state = () => ({
  title: null
})

export const mutations = {
  setNavigationBar(state, title) {
    state.title = title
  },
}
