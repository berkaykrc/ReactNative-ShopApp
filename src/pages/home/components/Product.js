import React from 'react'
import {components_styles, product_item} from "../styles/components_styles";
import { View, Text, Image, Pressable } from 'react-native'

const Product = ({ product, onSelect }) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={onSelect}>
      <View style={product_item.container}>
      <Image
        resizeMode="cover"
        source={{ uri: product.image }}
        style={product_item.logo}
      />
        <Text style={product_item.buttonTitle}>{product.title}</Text>
        <Text style={product_item.buttonTitle}>${product.price}</Text>
      </View>
    </Pressable>
  )
}
export { Product }
