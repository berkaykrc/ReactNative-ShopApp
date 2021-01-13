import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

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
