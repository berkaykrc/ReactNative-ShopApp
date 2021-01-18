import { FavoriteItem } from './componets/FavoriteItem'
import { Text, FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { set } from 'react-native-reanimated'

function FavoritesScreen() {
  
  const [storeFavs, setStoreFavs] = React.useState([])

  async function getFavorites() {
    try {
      const jsonValue = await AsyncStorage.getItem('favorites')
      const favo = jsonValue != null ? JSON.parse(jsonValue) : []
      console.log(favo)
      setStoreFavs([...favo])
    } catch (error) {
    
    }
  }

  React.useEffect(() => {
    getFavorites()
  }, [storeFavs])

  async function disLike(id) {
    const newArray = [...storeFavs]
    const index = newArray.findIndex((e) => e.id === id)
    newArray.splice(index, 1)
    await AsyncStorage.setItem('favorites',JSON.stringify(newArray))
    setStoreFavs(newArray)
  }

  const renderFavorites = ({ item }) => (
    <FavoriteItem item={item} onRemove={disLike} />
  )

  const renderHeader = () => (
    <View
      style={{ borderRadius: 14, backgroundColor: '', margin: 10 }}
    >
      <Text style={{ fontSize: 35, fontWeight: 'bold', margin: 5 }}>
        Favorites
      </Text>
    </View>
  )

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      keyExtractor={(_, i) => i.toString()}
      data={storeFavs}
      renderItem={renderFavorites}
    
    />
  )
}

export { FavoritesScreen }
