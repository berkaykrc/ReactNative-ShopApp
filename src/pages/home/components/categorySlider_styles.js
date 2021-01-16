import { StyleSheet } from 'react-native'

const categorySlider = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    padding: 8,
    paddingBottom: 8,
    backgroundColor: '#232f3e',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  // imageStyle: {
  //   width: 10,
  //   height: 10
  // },
  title: {
    marginTop: 5,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center'
  }
})

export { categorySlider }
