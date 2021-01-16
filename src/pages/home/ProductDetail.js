import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, ImageBackground, Button } from 'react-native'
import { productdetails } from './styles/productdetail_styles'
import { useDispatch } from 'react-redux'
import { useStorage } from '@ugenc/use-storage-hook'

function ProductDetailsScreen({ route }) {
  const { id } = route.params
  const [productDetail, setProductDetail] = useState({})
  const dispatch = useDispatch()
  const [storeValue, setStore, removeStore] = useStorage('@favorites')

  async function fetchProductData() {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProductDetail(data)
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  function onLike(product) {
    setStore(product)
    dispatch({ type: 'ADD_FAVORITE', payload: { product } })
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
        <Button title="like" onPress={() => onLike(productDetail)} />
      </View>
    </ScrollView>
  )
}

export { ProductDetailsScreen }
