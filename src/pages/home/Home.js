import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { Product } from './components/Product'
import { CategorySlider } from './components/CategorySlider'

const api_url = 'https://fakestoreapi.com/products'

function HomeScreen({ navigation }) {
  const [shopList, setShopList] = useState({})

  async function fetchData() {
    const { data } = await axios.get(api_url)
    setShopList(data)
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <CategorySlider />
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={shopList}
          renderItem={renderProduct}
        />
      </View>
    </View>
  )
}

export { HomeScreen }
