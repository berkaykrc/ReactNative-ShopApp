import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView,ImageBackground } from 'react-native'
import {productDetails} from './styles/homepage_styles'

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
      <View>
        <Text>{productDetail.title}</Text>
      </View>
    </ScrollView>
  )
}

export { ProductDetailsScreen }
