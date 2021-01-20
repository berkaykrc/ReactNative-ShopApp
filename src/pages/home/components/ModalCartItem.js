import React from 'react'
import modal from '../styles/modal_styles'
import { Text, Image, View } from 'react-native'

function ModalCartItem({ item }) {
  return (
    <View style={modal.modalitemContainer}>
      <View style={modal.modalImage}>
        <Image
          source={{ uri: item.image }}
          resizeMode="contain"
          style={{ width: 30, height: 50 }}
        />
      </View>
      <View style={modal.modalTextContainer}>
        <Text numberOfLines={1} style={modal.modalText}>
          {item.title}
        </Text>
        <Text style={modal.modalPrice}>$ {item.price}</Text>
      </View>
    </View>
  )
}
export { ModalCartItem }
