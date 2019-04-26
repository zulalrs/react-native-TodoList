import React, {Component} from 'react';
import { TextInput, Dimensions,View,FlatList,AsyncStorage} from 'react-native';
import Button from './Button';
import ListItems from './ListItems';

const { width, height } = Dimensions.get('window');
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            description:'',
            i:-1,
            data:[],
            isFetching:false
        }
    }
    componentDidMount() {
       
        AsyncStorage.getItem('data')
         .then(value => this.setState({ data: JSON.parse(value) }))
        
    }
    pushItem(){
        if(this.state.i!=-1){
            this.state.data.splice(this.state.i,1,{'title':this.state.title,'desc':this.state.description});
            this.setState({i:-1});
            AsyncStorage.setItem('data',JSON.stringify(this.state.data))
            this.setState({title: ''})
            this.setState({description: ''})
        }
        else{
            this.state.data.push({'title':this.state.title,'desc':this.state.description});
            this.setState({title: ''})
            this.setState({description: ''})
            AsyncStorage.setItem('data',JSON.stringify(this.state.data))
        }
     
    }
    onRefresh(){
        setTimeout(()=>{this.setState({isFetching:true})},50)
    }
    
   
    render(){
        const {data,title,description,isFetching}=this.state;
       
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
            
            <FlatList
                data={data.map((item)=>item)}
                refreshing={isFetching}
                onRefresh={this.onRefresh()}
                renderItem={({ item,i }) => {
                    return (
                        <ListItems 
                            key={i} 
                            list={item} 
                            array={this.state} 
                            index={data.indexOf(item)}
                            />
                    );
                  }}
            />

            </View>
        );
    }
}

export default Main;

const styles = {
    main:{
        flex: 9,
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f8f8ff',
        flexDirection: 'column',
    },
    input:{
        width: width*0.9,
        marginTop: 15,
    }
};