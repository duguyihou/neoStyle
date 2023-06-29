import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import NeoView from './common/NeoView';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <NeoView
        bg={{sm: 'primaryBg', md: 'secondaryBg', lg: 'tertiaryBg'}}
        width={{sm: 100, md: 150, lg: 200}}
        height={{sm: 100, md: 150, lg: 200}}
      />
      <NeoView
        bg={{sm: 'secondaryBg', md: 'tertiaryBg', lg: 'primaryBg'}}
        width={{sm: 100, md: 150, lg: 200}}
        height={{sm: 100, md: 150, lg: 200}}
      />
      <NeoView
        bg={{sm: 'tertiaryBg', md: 'primaryBg', lg: 'secondaryBg'}}
        width={{sm: 100, md: 150, lg: 200}}
        height={{sm: 100, md: 150, lg: 200}}
      />
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
