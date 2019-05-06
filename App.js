/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity,Text} from 'react-native';
import{Router,Scene,Stack,Actions} from 'react-native-router-flux'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import Main from './Components/Main';
import Input from './Components/Input';
import reducers from './Reducers';

export default class App extends Component {

  renderRight(){
    return(
      <TouchableOpacity>
        <Text onPress={()=>Actions.input({type:'push'})} style={{ marginRight:5, color: '#8a2be2' }}>Add Item</Text>
    </TouchableOpacity>
    )
    }
  render() {
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk,logger));
    return (
      <Provider store={store}>
      <Router 
      navigationBarstyle={styles.navBar} titleStyle={styles.textStyle}>
        <Stack key="root">
          <Scene 
            key="main"
            component={Main} 
            title="TODO LİST" 
            initial
            renderRightButton={this.renderRight()}
           
          />
          <Scene 
            key="input"
            component={Input} 
            title="ADD LİST" 
            
          />
        </Stack>
      </Router>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    backgroundColor: '#f8f8ff',
    borderBottomWidth: 2,
    borderColor: '#8a2be2',
    borderRadius: 10,
  },
  textStyle:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  }
};
