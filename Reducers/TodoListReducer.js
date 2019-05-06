import {AsyncStorage} from 'react-native';
import {ADD_TODO_LIST,DELETE_TODO_LIST,GET_TODO_LIST,UPDATE_TODO_LIST} from '../actions/types';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE={
    data:[],
    isCreated:false
};

export default (state=INITIAL_STATE,action)=>{
    
    switch (action.type) {
        case GET_TODO_LIST:
            return {...state,data:action.payload};
        case ADD_TODO_LIST:
            return {...state,data: [...state.data,action.payload],isCreated:true};
        case UPDATE_TODO_LIST:
           const array=state.data.slice(0)
           array.splice(action.payload.index,1,action.payload.item)
            AsyncStorage.setItem('data',JSON.stringify(array));
            return {
                ...state,data: array,isCreated:false
            };
        case DELETE_TODO_LIST:
            const items=state.data.slice(0)
            items.splice(action.payload,1)
            AsyncStorage.setItem('data',JSON.stringify(items)); 
            return {
                ...state,data: items,isCreated:false
            };
        default:
            return state;
    }
}