import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { set } from 'react-native-reanimated'
import { Product } from './components/Product'

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
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={shopList}
          renderItem={renderProduct}
        />
      </View>
    </SafeAreaView>
  )
}

export { HomeScreen }
