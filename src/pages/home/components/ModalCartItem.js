import React from 'react'
import modal from '../styles/modal_styles'
import { Text, Image, View } from 'react-native'

function ModalCartItem({ item }) {
  return (
    <View style={modal.modalitemContainer}>
      <View>
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
      </View>
      <View>
        <Text numberOfLines={2} style={modal.modalText}>
          {item.title}
        </Text>
      </View>
    </View>
  )
}
export { ModalCartItem }
