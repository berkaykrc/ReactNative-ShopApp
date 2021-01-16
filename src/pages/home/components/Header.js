import React from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import { header } from './header_styles'
import Icon from 'react-native-vector-icons/FontAwesome'

function LogoTitle() {
  return (
    <View style={header.container}>
      <TouchableOpacity style={header.icon1Container}>
        <Image
          resizeMode="contain"
          source={{}}
          style={header.icon1ImageStyle}
        />
      </TouchableOpacity>
      <View style={header.title}>
        <View style={header.titleContainer}>
          <Text>Projenin Adı</Text>
        </View>
      </View>
      <TouchableOpacity style={header.icon2Container}>
        {/*  <Image
          resizeMode="contain"
          source={{}}
          style={header.icon2ImageStyle}
        /> */}
        <Icon name="shopping-basket" size={30} />
      </TouchableOpacity>
    </View>
  )
}

export { LogoTitle }
