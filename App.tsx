/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import MainScreen from './src/screens/MainScreen';
import Header from './src/components/Header';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header text={'Chat'} />
      <MainScreen />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: 'black',
  },
});
