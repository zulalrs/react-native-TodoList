import React, {Component} from 'react';
import { Text,Dimensions,TouchableOpacity} from 'react-native';

const { width, height } = Dimensions.get('window');
class Button extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onClick}  style={styles.button}>
                <Text>Kaydet</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      width: width*0.8,
      height:40,
      marginTop: 15,
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 20,
    }
    
};

export default Button;