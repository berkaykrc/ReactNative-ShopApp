import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window')

const productdetails = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between'
  },
  addcart: {
    padding: 30,
    flexDirection: 'row',
    margin: 20
  },
  addbuton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'orange'
  },

  image: {
    height: deviceSize.height / 2,
    backgroundColor: 'white',
    justifyContent: 'flex-end'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25
  },
  title2: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  detail2: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  },
  detail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 8,
    backgroundColor: 'white'
  }
})

export { productdetails }
