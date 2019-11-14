export const state = () => ({
  titleItem: null
})

export const mutations = {
  setNavigationBar(state, titleItem) {
    state.titleItem = titleItem
  },
}
