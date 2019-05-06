import {AsyncStorage} from 'react-native';
import {
    GET_TODO_LIST,
    ADD_TODO_LIST,
    UPDATE_TODO_LIST,
    DELETE_TODO_LIST} from './types';


export const getTodoList=()=>{
    return(dispatch)=>{
        AsyncStorage.getItem('data')
        .then(value => { 
            const items= JSON.parse(value)
            dispatch({
                type:GET_TODO_LIST,
                payload:items
            });
        });
    }
}

export const addTodoList=(params)=>{
    return(dispatch)=>{
        dispatch({
            type:ADD_TODO_LIST,
            payload:params
        });
    }
}

export const updateTodoList=(item,index)=>{
    return(dispatch)=>{
        dispatch({
            type:UPDATE_TODO_LIST,
            payload:{item,index}
        });
    }
}

export const deleteTodoList=(index)=>{
    return(dispatch)=>{
        dispatch({
            type:DELETE_TODO_LIST,
            payload:index
        });
    }
}