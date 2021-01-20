import React from 'react'
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert
} from 'react-native'
import { ModalCart } from './ModalCart'
import { header } from './header_styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

function LogoTitle() {
  const myCart = useSelector((state) => state.cart)
  const [modalVisible, setModalVisible] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const dispatch = useDispatch()

  function cartSummary() {
    if (myCart.length > 0) {
      let total = myCart.reduce((acc, currentItem) => {
        return acc + currentItem.price
      }, 0)
      return total
    } else {
      return 0
    }
  }

  async function readStorage() {
    try {
      const jsonValue = await AsyncStorage.getItem('buyHistory')
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {}
  }

  async function handleSuccess() {
    try {
      let totalPrice = cartSummary()
      const existingHistory = await AsyncStorage.getItem('buyHistory')
      let newHistory = JSON.parse(existingHistory)
      if (!newHistory) {
        newHistory = []
      }
      newHistory.push({ products: myCart, totalPrice })
      await AsyncStorage.setItem('buyHistory', JSON.stringify(newHistory))
      dispatch({ type: 'BUY_SUCCESS' })
      setSuccess(!success)
      readStorage()
    } catch (e) {
      Alert.alert('Hata oluştu', 'Ürün alırken bir hata oluştu')
    }
  }

  return (
    <View style={header.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}
        >
          <View style={styles.modalView}>
            <TouchableOpacity style={{ position: 'absolute', right: 15 }}>
              <Icon name="history" color="#232f3e" size={25} />
            </TouchableOpacity>
            <ModalCart />
            <View
              style={{
                justifyContent: 'flex-end'
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={styles.textStyle2}>Toplam Tutar:</Text>
                <Text style={styles.textStyle2}>{cartSummary()}</Text>
              </View>
              <TouchableOpacity
                style={{
                  ...styles.openButton,
                  backgroundColor: '#232f3e'
                }}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Sepeti Kapat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.openButton,
                  backgroundColor: '#232f3e',
                  margin: 5
                }}
                onPress={handleSuccess}
              >
                <Text style={styles.textStyle}>Satın Al</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity style={header.icon1Container}>
        <Image
          resizeMode="contain"
          source={{}}
          style={header.icon1ImageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={header.icon2Container}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Icon name="shopping-basket" size={30} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    marginTop: 190,
    alignSelf: 'center',
    height: 400,
    width: 370,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textStyle2: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export { LogoTitle }
