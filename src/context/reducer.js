function reducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const { item } = action.payload
      const index = state.favorites.findIndex((fav) => fav.id === item.id)
      return index === -1
        ? { ...state, favorites: [...state.favorites, item] }
        : state

    case 'PRODUCT_LIST':
      const { data } = action.payload
      return { ...state, products: data }

    case 'FILTER_PRODUCTS':
      const { filteredProducts } = action.payload
      return { ...state, products: filteredProducts }

    default:
      return state
  }
}
export default reducer
