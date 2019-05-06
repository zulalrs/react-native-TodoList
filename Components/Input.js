import React, {Component} from 'react';
import { TextInput, Dimensions,View,AsyncStorage} from 'react-native';
import{Actions} from 'react-native-router-flux'
import { connect } from 'react-redux';
import { addTodoList,updateTodoList } from '../actions';
import {listdata} from './ListData';
import Button from './Button';

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
        const item=this.props.data;
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
    async componentWillReceiveProps(props){
        
        if(props.isCreated)
        {
            await AsyncStorage.setItem('data',JSON.stringify(props.data));
            Actions.pop();
        }
    }
    pushItem() {
        const i=this.props.index;
        if(i>=0){
            const param={
                'title':this.state.title,'desc':this.state.description
            }
            this.props.updateTodoList(param,i);
            Actions.pop();
        }
        else{
            const param={
                'title':this.state.title,'desc':this.state.description
            }
            this.props.addTodoList(param);
        }
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

const mapStateToProps=({todoListResponse})=>{
    return { data: todoListResponse.data, isCreated:  todoListResponse.isCreated }
}

export default connect(mapStateToProps,{addTodoList,updateTodoList})(Input);