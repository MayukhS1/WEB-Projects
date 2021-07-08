import React, {useReducer} from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 10,
};

const reducer = (state, action) =>{
    switch(action.type){
        case 'increment' : 
            return {...state, firstCounter : state.firstCounter+ action.value};
        case 'decrement' : 
            return {...state, firstCounter : state.firstCounter - action.value};
        case 'increment2':
            return {...state, secondCounter : state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter : state.secondCounter - action.value};
        case 'reset' :
            return initialState;
        default : 
            return state;
    }    
}

function ReducerHookCount2() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (

        <div className="container">
            <p>Reducer Hook Count : {count.firstCounter}</p>
            <p>Reducer Hook Count 2: {count.secondCounter}</p>
            <button onClick={()=> dispatch({type : 'increment', value : 1})}>Increase</button>
            <button onClick={()=> dispatch({type : 'decrement', value : 1})}>Decrease</button>
            <button onClick={()=> dispatch({type : 'increment2', value : 5})}>+5</button>
            <button onClick={()=> dispatch({type : 'decrement2', value : 5})}>-5</button>
            <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerHookCount2
