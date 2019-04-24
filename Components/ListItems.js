import React, {Component} from 'react';
import {View,Text,Dimensions,TouchableOpacity,AsyncStorage} from 'react-native';

const {width, height}=Dimensions.get('window');

class ListItems extends Component{
    delete(){
        console.warn(this.props.index);
        this.props.array.data.splice(this.props.index,1);
        // this.setState(this.props.array);
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
                    <Text>Değiştir</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.delete.bind(this)} style={styles.button} >
                    <Text>Sil</Text>
                </TouchableOpacity>
               
            </View>
        );
    }
}

const styles={
    listItems:{
        width: width,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        marginLeft:15,
        width:width*0.7,
        borderColor: 'black',
        borderWidth: 1,
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
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default ListItems;