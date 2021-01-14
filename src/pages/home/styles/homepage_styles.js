import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const productDetails = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: deviceSize.height / 2,
    borderColor: '#e0e0e0',
    justifyContent: 'flex-end',
  
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin:10,
    
  },
  detail: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    margin:10,
    
  },
});

export {main, productDetails};
