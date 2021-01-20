import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window')

const product_item = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#bdbdbd',
    margin: 5,
    marginVertical: 10,
    borderRadius: 5,
    shadowOpacity: 0.3,
    elevation: 100
  },
  logo: {
    height: deviceSize.height / 4
  },
  product: {
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row'
  },
  buttonTitle: {
    padding: 10,
    color: '#000000',
    fontWeight: 'bold',
    marginVertical: 3,
    borderTopWidth: 2,
    borderTopColor: '#eeeeee',
    borderRadius: 5
  },
  priceTitle: {
    alignSelf: 'flex-end',
    padding: 5,
    color: 'red',
    fontWeight: 'bold',
    marginVertical: 2
  }
})
export { product_item }
