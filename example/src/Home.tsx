import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import NeoView from './common/NeoView';

const Home = () => {
  const viewSize = {width: 100, height: 100};
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <NeoView bg={{sm: 'primaryBg', md: 'secondaryBg'}} style={viewSize} />
      <NeoView bg={'secondaryBg'} style={viewSize} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
