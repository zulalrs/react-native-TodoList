import React, {Component} from 'react';
import {View,FlatList,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ListItems from './ListItems';

class Main extends Component{
    state={
        data:this.props.dataHome
    }
    componentWillMount() {
        AsyncStorage.getItem('data')
         .then(value => this.setState({ data: JSON.parse(value) }))
         
    }
    render(){
        return(
            <View style={styles.main}>
            
            <FlatList
                data={this.state.data}
                renderItem={({item,index}) => {
                    return (
                        <ListItems 
                            list={item} 
                            index={index}
                            />
                    );
                  }}
                  keyExtractor={(item,index)=>index.toString()}
            />

            </View>
        );
    }
}

export default Main;

const styles = {
    main:{
        backgroundColor: '#f8f8ff'
        // flex: 9,
        // width: width,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        // flexDirection: 'column',
    }
};