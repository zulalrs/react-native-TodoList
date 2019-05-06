import React, {Component} from 'react';
import {View,FlatList,AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import { getTodoList } from '../actions';
import ListItems from './ListItems';

class Main extends Component{
    
    componentDidMount() {
       this.props.getTodoList();
         
    }
    render(){
        return(
            <View style={styles.main}>
            
            <FlatList
                data={this.props.data}
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
const styles = {
    main:{
        backgroundColor: '#f8f8ff'
    }
};
const mapStateToProps=({todoListResponse})=>{
    return { data: todoListResponse.data }
}


export default connect(mapStateToProps,{getTodoList})(Main);

