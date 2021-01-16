function reducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const { product } = action.payload
      const index = state.favorites.findIndex((fav) => fav.id === product.id)
      return index === -1
        ? { ...state, favorites: [...state.favorites, product] }
        : state

    case 'REMOVE_FAVORITE':
      console.log('merhaba')
      const { favlist } = action.payload
      return { ...state, favorites: favlist }
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
