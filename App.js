/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity,Text,AsyncStorage} from 'react-native';
import{Router,Scene,Stack,Actions} from 'react-native-router-flux'
import Main from './Components/Main';
import Input from './Components/Input';
import { listdata } from './Components/ListData'

export default class App extends Component {

 componentWillMount(){
  AsyncStorage.getItem('data')
  .then(value => (listdata.data=JSON.parse(value)))
 }
  renderRight(){
    return(
      <TouchableOpacity>
        <Text onPress={()=>Actions.input({type:'push'})} style={{ marginRight:5, color: '#8a2be2' }}>Add Item</Text>
    </TouchableOpacity>
    )
    }
  render() {
    return (
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
    backgroundColor: '#8a2be2',
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
