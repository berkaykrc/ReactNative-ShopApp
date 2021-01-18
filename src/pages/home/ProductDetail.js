import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, ImageBackground, Button } from 'react-native'
import { productdetails } from './styles/productdetail_styles'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

function ProductDetailsScreen({ route }) {
  const { id } = route.params
  const [productDetail, setProductDetail] = useState({})
  const dispatch = useDispatch()
  const favs = useSelector((state) => state.favorites)

  async function fetchProductData() {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProductDetail(data)
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  function itemIndexer() {
    const index = favs.findIndex((fav) => fav.id === productDetail.id)
    // ilk açılışta -1 döner çünkü favoriler yok
    return index
  }

  async function saveFavorites() {
    dispatch({ type: 'ADD_FAVORITE', payload: { productDetail } })
    try {
      const index = itemIndexer()
      const existingHistory = await AsyncStorage.getItem('favorites')
      let newHistory = JSON.parse(existingHistory)
      if (!newHistory) {
        newHistory = []
      }
      newHistory.push(productDetail)
      await AsyncStorage.setItem('favorites', JSON.stringify(newHistory))
    } catch (e) {
      console.log(e)
    }
  }

  // function onLike(product) {
  //   dispatch({ type: 'ADD_FAVORITE', payload: { product } })
  //   saveFavorites()
  // }

  function onAddCart(product) {
    dispatch({ type: 'ADD_CART', payload: { product } })
  }
  return (
    <ScrollView>
      <ImageBackground
        resizeMode="contain"
        source={{ uri: productDetail.image }}
        style={productdetails.image}
      />
      <View style={productdetails.detail}>
        <Text style={productdetails.title}>{productDetail.title}</Text>
        <Text style={productdetails.title}>{productDetail.price} $</Text>
        <Text>{productDetail.description}</Text>
        <Button title="like" onPress={() => saveFavorites(productDetail)} />
        <Button title="cart" onPress={() => onAddCart(productDetail)} />
      </View>
    </ScrollView>
  )
}

export { ProductDetailsScreen }
