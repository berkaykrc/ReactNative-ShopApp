import axios from 'axios';

import React, {useState,useEffect} from 'react';

import { View,SafeAreaView,FlatList } from 'react-native';

import {ShopCart} from '../shopcart/ShopCart';
const api_url = 'https://fakestoreapi.com/products';
function HomeScreen({ navigation }) {
  const [shopList, setShopList] = useState([]);

  function fetchData() {
    axios
      .get(api_url)
      .then((response) => setShopList(response.data));
  }

  useEffect(() => {
    fetchData();
  }, []);
 
  const renderProduct = ({item}) => (
    <ShopCart
      product={item}
      onSelect={() => navigation.navigate('ProductDetail', {id: item.id})}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={shopList}
          renderItem={renderProduct}
        />
      </View>
    </SafeAreaView>
  )
}

export { HomeScreen }
