import React from 'react'
import { Button, Text, View } from 'react-native'
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Detail"
        onPress={() =>
          navigation.navigate('ProductDetail', {
            name: "Ürün adı header'a gelecek"
          })
        }
      />
    </View>
  )
}

export { HomeScreen }
