function reducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const { productDetail } = action.payload
      console.log(productDetail)
      const index = state.favorites.findIndex(
        (fav) => fav.id === productDetail.id
      )
      return index === -1
        ? { ...state, favorites: [...state.favorites, productDetail] }
        : state

    case 'ADD_CART':
      const cartProduct = action.payload.product
      console.log(cartProduct)
      return { ...state, cart: [...state.cart, cartProduct] }

    case 'REMOVE_FAVORITE':
      const { favlist } = action.payload
      return { ...state, favorites: favlist }

    case 'PRODUCT_LIST':
      const { data } = action.payload
      return { ...state, products: data }

    case 'FILTER_PRODUCTS':
      const { filteredProducts } = action.payload
      return { ...state, products: filteredProducts }

    case 'BUY_SUCCESS':
      return { ...state, cart: [] }

    default:
      return state
  }
}
export default reducer
