import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './Home';
import {ThemeProvider} from 'neostyle';
import theme from './theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar />
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
