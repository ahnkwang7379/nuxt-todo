export const state = () => ({
  globalState: '123',
})

export const getters = {
  globalState: ({ globalState }) => globalState,
}
