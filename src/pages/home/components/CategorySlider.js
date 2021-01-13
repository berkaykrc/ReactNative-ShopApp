import axios from 'axios'
import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { categorySlider } from './categorySlider_styles'

const categories_url = 'https://fakestoreapi.com/products/categories'

function CategorySlider() {
  const [categories, setCategories] = React.useState([])

  async function fetchCategories() {
    const { data } = await axios.get(categories_url)
    setCategories(data)
  }

  React.useEffect(() => {
    fetchCategories()
  }, [])
  function renderItem({ item }) {
    return (
      <TouchableOpacity style={categorySlider.container}>
        <View style={categorySlider.imageContainer}>
          <Image resizeMode="contain" style={categorySlider.imageStyle} />
        </View>
        <Text style={categorySlider.title}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ padding: 15 }}>
      <Text>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  )
}

export { CategorySlider }
