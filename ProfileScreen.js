import type { Node } from 'react';
import HelloWorldApp from './src/HelloWorld';
import { SafeAreaView, Text, useColorScheme, View } from 'react-native';
import ProductTable from './ProductTable';
import React from 'react';

const PRODUCTS = [
  { category: '水果', price: '￥1', name: 'PingGuo' },
  { category: '水果', price: '￥1', name: 'HuoLongGuo' },
  { category: '水果', price: '￥2', name: 'BaiXiangGuo' },
  { category: '蔬菜', price: '￥2', name: 'BoCai' },
  { category: '蔬菜', price: '￥4', name: 'NanGua' },
  { category: '蔬菜', price: '￥1', name: 'WanDou' },
];

const ProfileScreen: () => Node = () => {

  return (
    <View>
      <SafeAreaView style={{ marginHorizontal: 30 }}>
        <ProductTable products={PRODUCTS} />
      </SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello, world!</Text>
      </View>
    </View>
  );
};


export default ProfileScreen;
