import React from 'react'
import { product_item } from './product_styles'
import { View, Text, Image, Pressable } from 'react-native'

const Product = ({ product, onSelect }) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={onSelect}>
      <View style={product_item.container}>
        <Image
          resizeMode="contain"
          source={{ uri: product.image }}
          style={product_item.logo}
        />
        <Text numberOfLines={1} style={product_item.buttonTitle}>{product.title}</Text>
        <Text style={product_item.priceTitle}>${product.price}</Text>
      </View>
    </Pressable>
  )
} 
export { Product }
