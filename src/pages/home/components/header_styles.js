import { StyleSheet } from 'react-native'

const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50
  },
  icon1Container: {
    width: 50,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon1ImageStyle: { width: 30, height: 30 },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 17
  },
  titleContainer: {
    height: 20,
    borderRadius: 25,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon2Container: {
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon2ImageStyle: {
    width: 30,
    height: 30
  }
})

export { header }
