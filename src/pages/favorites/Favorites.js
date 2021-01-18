import { FavoriteItem } from './componets/FavoriteItem'
import { Text, FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

function FavoritesScreen() {
  const dispatch = useDispatch()
  const favlist = useSelector((state) => state.favorites)
  const [storeFavs, setStoreFavs] = React.useState(null)

  async function getFavorites() {
    try {
      const jsonValue = await AsyncStorage.getItem('favorites')
      const favo = jsonValue != null ? JSON.parse(jsonValue) : null
      setStoreFavs(favo)
    } catch (error) {
      console.log('cant get favorites')
    }
  }

  React.useEffect(() => {
    getFavorites()
  }, [])

  function disLike(id) {
    const newArray = [...favlist]
    const index = newArray.findIndex((e) => e.id === id)
    newArray.splice(index, 1)
    dispatch({ type: 'REMOVE_FAVORITE', payload: { favlist: newArray } })
  }

  const renderFavorites = ({ item }) => (
    <FavoriteItem item={item} onRemove={disLike} />
  )

  const renderHeader = () => (
    <View
      style={{ borderRadius: 14, backgroundColor: '#bdbdbd', marginTop: 5 }}
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
