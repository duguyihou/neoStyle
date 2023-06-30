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
        padding={{sm: 's1', md: 's2', lg: 's3'}}
      />
      <NeoView
        bg={{sm: 'secondaryBg', md: 'tertiaryBg', lg: 'primaryBg'}}
        width={{sm: 100, md: 150, lg: 200}}
        height={{sm: 100, md: 150, lg: 200}}
        margin={{sm: 's1', md: 's2', lg: 's3'}}
        borderRadius={{sm: 'b1', md: 'b2', lg: 'b3'}}
        borderColor={{sm: 'primaryBg', md: 'secondaryBg', lg: 'tertiaryBg'}}
        borderWidth={{sm: 1, md: 2, lg: 4}}
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
