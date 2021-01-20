import { StyleSheet } from 'react-native'

const modal_styles = StyleSheet.create({
  modalitemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5
  },
  modalImage: {},
  modalTextContainer: {
    marginVertical: 5
  },
  modalText: {
    textAlign: 'left',
    marginLeft: 3
  },
  modalPrice: {
    alignSelf: 'flex-end'
  }
})

export default modal_styles
