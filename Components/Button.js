import React, {Component} from 'react';
import { Text,Dimensions,TouchableOpacity} from 'react-native';

const { width, height } = Dimensions.get('window');
class Button extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onClick}  style={styles.button}>
                <Text style={{ color: 'black'}}>Kaydet</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8a2be2',
      width: width*0.8,
      height:40,
      marginTop: 5,
      marginBottom: 5
    }
    
};

export default Button;