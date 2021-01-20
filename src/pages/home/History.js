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
  }, [])

  function renderItems({ item }) {
    const products = item.products.map((e) => e.title)

    return (
      <View style={{ flex: 1, marginVertical: 10, padding: 10 }}>
        <Text>{products}</Text>
        <Text style={{ alignSelf: 'flex-end' }}>
          $ {Math.round(item.totalPrice)}
        </Text>
      </View>
    )
  }
  const renderHeader = () => (
    <View style={{ borderRadius: 14, backgroundColor: '', margin: 10 }}>
      <Text style={{ fontSize: 35, fontWeight: 'bold', margin: 5 }}>
        Previously purchased
      </Text>
    </View>
  )
  return (
    <View style={main.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={history}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItems}
      />
    </View>
  )
}

export { HistoryScreen }
