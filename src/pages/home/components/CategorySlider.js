import axios from 'axios'
import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { categorySlider } from './categorySlider_styles'
import { useDispatch } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const categories_url = 'https://fakestoreapi.com/products/categories'

function CategorySlider({ productsList }) {
  const [categories, setCategories] = React.useState([])
  const dispatch = useDispatch()

  function onSelectCategory(category) {
    const filteredProducts = productsList.filter(
      (products) => products.category === category
    )
    dispatch({
      type: 'FILTER_PRODUCTS',
      payload: {
        filteredProducts
      }
    })
  }

  async function fetchCategories() {
    const { data } = await axios.get(categories_url)
    setCategories(data)
  }

  React.useEffect(() => {
    fetchCategories()
  }, [])

  function renderCategories({ item }) {
    return (
      <TouchableOpacity
        style={categorySlider.container}
        onPress={() => onSelectCategory(item)}
      >
        <View style={categorySlider.imageContainer}>
          {item === 'jewelery' && <FontAwesome name="diamond" size={25} />}
          {item === 'men clothing' && <Ionicons name="man" size={25} />}
          {item === 'women clothing' && <Ionicons name="woman" size={25} />}
          {item === 'electronics' && (
            <MaterialCommunityIcons name="cellphone" size={25} />
          )}
        </View>
        <Text style={categorySlider.title}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ padding: 15 }}>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  )
}

export { CategorySlider }
