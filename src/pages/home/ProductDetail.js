import axios from 'axios';

import React, {useEffect, useState} from 'react';

import { View, Text, ImageBackground,ScrollView} from 'react-native';



function ProductDetail({route}) {
  const {id} = route.params;
  const [productDetail, setProductDetail] = useState({});

  async function fetchProductData() {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`,
    );

    setProductDetail(response.data[0]);

  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ScrollView >
        <ImageBackground
          resizeMode="contain"
          source={{uri: productDetail.image}}
        />
        <View>
            <Text>{productDetail.title}</Text>
            <Text>{productDetail.description}</Text>
            </View>

     </ScrollView>
  );
}

export {ProductDetail};
