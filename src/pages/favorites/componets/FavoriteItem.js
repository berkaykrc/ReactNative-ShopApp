import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { favorite_item_styles } from './favorite_item_styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function FavoriteItem({ item, onRemove }) {
  return (
    <View style={favorite_item_styles.container}>
      <Text style={favorite_item_styles.name}>{item.title}</Text>
      <Text>{item.body}</Text>
      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Icon
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ alignSelf: 'flex-end' }}
          name="heart"
          color="red"
          size={25}
        />
      </TouchableOpacity>
    </View>
  )
}
