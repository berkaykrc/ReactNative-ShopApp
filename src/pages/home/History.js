import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { main } from './styles/homepage_styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

function HistoryScreen() {
  const [history, handleHistory] = React.useState([])

  async function getHistory() {
    const data = await AsyncStorage.getItem('buyHistory')
    const historyList = JSON.parse(data)
    handleHistory(historyList)
  }

  React.useEffect(() => {
    getHistory()
  })

  function renderItems({ item }) {
    console.log(item)
    return (
      <View style={{ flex: 1 }}>
        <Text>{item.products.description}</Text>
      </View>
    )
  }
  return (
    <View style={main.container}>
      <FlatList
        data={history}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItems}
      />
    </View>
  )
}

export { HistoryScreen }
