import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window')

const product_item = StyleSheet.create({
  container: {
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
    color: '#000000',
    fontWeight: 'bold',
    marginVertical: 3
  }
})
export { product_item }
