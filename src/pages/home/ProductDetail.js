import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView,ImageBackground, Button } from 'react-native'
import {productdetails} from './styles/homepage_styles'

function ProductDetailsScreen({ route }) {
  const { id } = route.params
  const [productDetail, setProductDetail] = useState({})

  async function fetchProductData() {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProductDetail(data)
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  return (
    <ScrollView>
       <ImageBackground
          resizeMode="contain"
          source={{uri: productDetail.image}}
          style={productdetails.image}>
        </ImageBackground>
      <View style={productdetails.detail}>  
        <Text style={productdetails.title}>{productDetail.title}</Text>
        <Text style={productdetails.title}>{productDetail.price} $</Text>
        <Text>{productDetail.description}</Text>
      </View>
    </ScrollView>
  )
}

export { ProductDetailsScreen }
