import { useSelector } from 'react-redux'
import { FavoriteItem } from './componets/FavoriteItem'
import { Text, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import React from 'react'
import { useStorage } from '@ugenc/use-storage-hook'

function FavoritesScreen() {
  const dispatch = useDispatch()
  const favlist = useSelector((state) => state.favorites)
  const [storeValue] = useStorage('@favorites')

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
    <Text style={{ fontSize: 35, fontWeight: 'bold', margin: 5 }}>
      Favorites
    </Text>
  )

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      keyExtractor={(_, i) => i.toString()}
      data={favlist}
      renderItem={renderFavorites}
    />
  )
}

export { FavoritesScreen }
