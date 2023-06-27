import {View, Text} from 'react-native';
import React from 'react';
import NeoView from './NeoView';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <NeoView bg={'cardPrimaryBackground'} />
    </View>
  );
};

export default Home;
