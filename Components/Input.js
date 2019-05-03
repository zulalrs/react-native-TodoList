import React, {Component} from 'react';
import { TextInput, Dimensions,View,AsyncStorage} from 'react-native';
import{Actions} from 'react-native-router-flux'
import Button from './Button';
import {listdata} from './ListData';

const { width, height } = Dimensions.get('window');
class Input extends Component{
    constructor(props){
        super(props);
        state={
            title:'',
            description:'',
        }
    }
    
    componentWillMount(){
        const item=listdata.data;
        const i=this.props.index;
        if(i>=0){
            this.setState({title: item[i].title})
            this.setState({description: item[i].desc})
        }
        else{
            this.setState({title: ''})
            this.setState({description: ''})
        }
    }
    pushItem() {
        const i=this.props.index;
        if(i>=0){
            listdata.data.splice(i,1,{'title':this.state.title,'desc':this.state.description});
        }
        else{
            listdata.data.push({'title':this.state.title,'desc':this.state.description});
        }

        AsyncStorage.setItem('data',JSON.stringify(listdata.data));

        Actions.main({type:'push',dataHome:listdata.data})
        
    }
    
    render(){
        const {title,description}=this.state;
       
        return(
            <View style={styles.main}>
                <View style={styles.input}>
                <TextInput 
                    placeholder="Başlık giriniz"
                    placeholderTextColor="gray"
                    style={{borderColor:"black", borderWidth:1, marginBottom:5}}
                    onChangeText={(text)=>this.setState({title: text})}
                    value={title}
                />
                
                <TextInput 
                    placeholder="Açıklama giriniz"
                    placeholderTextColor="gray"
                    multiline={true}
                    numberOfLines={4}
                    style={{borderColor:"black", borderWidth:1}}
                    onChangeText={(text)=>this.setState({description: text})}
                    value={description}
                />
            </View>
            <Button onClick={this.pushItem.bind(this)} />
          
            </View>
        );
    }
}

export default Input;

const styles = {
    main:{
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input:{
        width: width*0.9,
        marginTop: 15,
    }
};