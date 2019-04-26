import React from 'react';
import {View,Text,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
 const Header = ()=>{
    return(
        <View style={styles.header}>
            <Text style={styles.text}>Todo List</Text>
        </View>
    );
};

const styles = {
    header: {
        flex: 1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8ff',
        borderBottomWidth: 2,
        borderColor: '#8a2be2',
        borderRadius: 10,
    },
    text:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
};

export {Header};