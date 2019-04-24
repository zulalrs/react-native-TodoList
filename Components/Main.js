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
            data:[]
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('data')
         .then(value => this.setState({ data: JSON.parse(value) }))
    }
    pushItem(){
        if(this.state.i!=-1){
            this.state.data.splice(this.state.i,1,{'title':this.state.title,'desc':this.state.description});
            this.setState(this.state.data);
            this.setState({i:-1});
            AsyncStorage.setItem('data',JSON.stringify(this.state.data))
            console.warn(this.state.data);
        }
        else{
            this.state.data.push({'title':this.state.title,'desc':this.state.description});
            this.setState(this.state.data)
            console.warn(this.state.data);
             this.setState({title: ''})
            this.setState({description: ''})
            AsyncStorage.setItem('data',JSON.stringify(this.state.data))
        }
     
    }
    // items(){
    //     return this.state.data.map((item,i)=>{
    //         return <ListItems key={i} list={item} array={this.state.data} index={i}/>
    //     })
    // }
    render(){
        return(
            <View style={styles.main}>
                <View style={styles.input}>
                <TextInput 
                    placeholder="Başlık giriniz"
                    placeholderTextColor="gray"
                    style={{borderColor:"black", borderWidth:1, marginBottom:5}}
                    onChangeText={(text)=>this.setState({title: text})}
                    value={this.state.title}
                />
                
                <TextInput 
                    placeholder="Açıklama giriniz"
                    placeholderTextColor="gray"
                    multiline={true}
                    numberOfLines={4}
                    style={{borderColor:"black", borderWidth:1}}
                    onChangeText={(text)=>this.setState({description: text})}
                    value={this.state.description}
                />
            </View>
            <Button onClick={this.pushItem.bind(this)} />
            
            <FlatList
                data={this.state.data.map((item)=>item)}
                renderItem={({ item,i }) => {
                    return (
                        <ListItems 
                            key={i} 
                            list={item} 
                            array={this.state} 
                            index={this.state.data.indexOf(item)}
                            />
                    );
                  }}
            />

            {/* <View>
                {this.items()}
            </View> */}
            
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
        backgroundColor: '#F5FCFF',
        marginTop: 15,
        flexDirection: 'column',
    },
    input:{
        width: width*0.9,
    }
};