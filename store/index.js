export const state = () => ({
  title: null,
  hiddenBottom: false
})

export const mutations = {
  setNavigationBar(state, title) {
    state.title = title
  },
  setBottomHidden(state, hiddenBottom) {
    state.hiddenBottom = hiddenBottom
  }
}
