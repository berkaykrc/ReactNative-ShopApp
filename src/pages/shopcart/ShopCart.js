import React from 'react';

import {View, Text, Image, Pressable} from 'react-native';


const ShopCart= ({product,onSelect}) => {
  return (
   
      <Pressable onPress={onSelect}>
      <Image
        resizeMode="contain"
        source={{uri: product.image}}

      />
        <View>
          <Text>{product.title}</Text>
        </View>
        </Pressable>
  );
};
export {ShopCart};
