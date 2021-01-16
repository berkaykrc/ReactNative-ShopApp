import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { Product } from './components/Product'
import { CategorySlider } from './components/CategorySlider'
import { useDispatch, useSelector } from 'react-redux'
import { main } from './styles/homepage_styles'

const api_url = 'https://fakestoreapi.com/products'

function HomeScreen({ navigation }) {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.products)
  const [products, setProducts] = useState([])

  async function fetchData() {
    const { data } = await axios.get(api_url)
    dispatch({ type: 'PRODUCT_LIST', payload: { data } })
    setProducts(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderProduct = ({ item }) => (
    <Product
      product={item}
      onSelect={() => navigation.navigate('ProductDetail', { id: item.id })}
    />
  )

  return (
    <View style={main}>
      <View>
        <CategorySlider productsList={products} />
      </View>
      <View style={main}>
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={productList}
          renderItem={renderProduct}
        />
      </View>
    </View>
  )
}

export { HomeScreen }
