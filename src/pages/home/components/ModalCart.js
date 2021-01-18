import React from 'react'
import { FlatList } from 'react-native'
import { ModalCartItem } from './ModalCartItem'
import { useSelector } from 'react-redux'

function ModalCart() {
  const cart = useSelector((state) => state.cart)

  function renderItem({ item }) {
    return <ModalCartItem item={item} />
  }
  return (
    <FlatList
      keyExtractor={(_, i) => i.toString()}
      data={cart}
      renderItem={renderItem}
    />
  )
}

export { ModalCart }
