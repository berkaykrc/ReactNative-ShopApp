import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');


const product_item = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#bdbdbd',
    margin: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  logo: {
    height: deviceSize.height / 4,
  },
  productname: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  product: {
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export {product_item};
