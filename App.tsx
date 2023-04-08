/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import Navigation from './src/navigation';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container1: {},
});

export default App;
