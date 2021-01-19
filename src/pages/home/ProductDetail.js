import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Button,
  TouchableOpacity
} from 'react-native'
import { productdetails } from './styles/productdetail_styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Fontisto'
import { useDispatch } from 'react-redux'

function ProductDetailsScreen({ route }) {
  const { id } = route.params
  const [productDetail, setProductDetail] = useState({})
  const dispatch = useDispatch()

  async function fetchProductData() {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProductDetail(data)
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  async function saveFavorites() {
    try {
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
      <View style={productdetails.detail2}>
        <View style={productdetails.icon}>
          <Text style={productdetails.title}>{productDetail.title}</Text>
          <View>
            <TouchableOpacity onPress={() => saveFavorites(productDetail)}>
              <Icon name="favorite" color="orange" size={40} />
            </TouchableOpacity>
          </View>
        </View>
        <Text>{productDetail.description}</Text>
        <View style={productdetails.addcart}>
          <Text style={productdetails.title2}>{productDetail.price} $</Text>
          <Button
            title="Add To Cart"
            color="orange"
            onPress={() => onAddCart(productDetail)}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export { ProductDetailsScreen }
