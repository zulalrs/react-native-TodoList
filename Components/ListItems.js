import React, {Component} from 'react';
import {View,Text,Dimensions,TouchableOpacity,AsyncStorage} from 'react-native';

const {width, height}=Dimensions.get('window');

class ListItems extends Component{
    delete(){
        this.props.array.data.splice(this.props.index,1);
        AsyncStorage.setItem('data',JSON.stringify(this.props.array.data))
    }
    update(){
        this.props.array.i=this.props.index;
        this.props.array.title=this.props.list.title;
        this.props.array.description=this.props.list.desc;
    }
    
    render(){
        return(
            <View style={styles.listItems}>
                <View style={styles.content}>
                    <Text style={styles.title}>{this.props.list.title}</Text>
                    <Text style={styles.desc}>{this.props.list.desc}</Text>
                </View>
               
                <TouchableOpacity onPress={this.update.bind(this)} style={styles.button} >
                    <Text style={{color:'green', fontWeight:'400'}}>Değiştir</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.delete.bind(this)} style={styles.button} >
                    <Text style={{color:'red', fontWeight:'400'}}>Sil</Text>
                </TouchableOpacity>
               
            </View>
        );
    }
}

const styles={
    listItems:{
        width: width,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#e6e6fa',
        height:65,
        borderColor: '#d3d3d3',
        borderBottomWidth: 2,
    },
    content:{
        marginLeft:20,
        width:width*0.7,
        borderRightWidth: 2,
        borderRightColor: '#8a2be2'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 14,
        textDecorationLine: 'underline',
        color: 'black'
    },
    desc:{
        color: 'black'
    },
    button:{
        width:width*0.15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 3,
    }
};

export default ListItems;