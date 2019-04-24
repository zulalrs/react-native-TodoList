/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { SafeAreaView} from 'react-native';
import Main from './Components/Main';
import {Header} from './Components/Header';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
       <Header />
       <Main />
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
};
