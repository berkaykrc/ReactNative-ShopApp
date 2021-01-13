import React from 'react'

import { View, Text, Image, Pressable } from 'react-native'

const Product = ({ product, onSelect }) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={onSelect}>
      <Image
        resizeMode="cover"
        source={{ uri: product.image }}
        style={{ height: 200, borderRadius: 10 }}
      />
      <View>
        <Text>{product.title}</Text>
      </View>
    </Pressable>
  )
}
export { Product }
