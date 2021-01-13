import React from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import { header } from './header_styles'

function LogoTitle() {
  return (
    <View style={header.container}>
      <TouchableOpacity style={header.icon1Container}>
        <Image
          resizeMode="contain"
          source={{
            uri: {
              /* image */
            }
          }}
          style={header.icon1ImageStyle}
        />
      </TouchableOpacity>
      <View style={header.title}>
        <View style={header.titleContainer}>
          {/* <Text>projenin adı</Text> */}
        </View>
        <TouchableOpacity style={header.icon2Container}>
          <Image
            resizeMode="contain"
            source={{
              uri: {
                /* sepet icon */
              }
            }}
            style={header.icon2ImageStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { LogoTitle }
