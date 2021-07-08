import React, {useReducer} from 'react'

const initialState = 0;

const reducer = (state, action) =>{
    switch(action){
        case 'increment' : 
            return state+1;
        case 'decrement' : 
            return state-1;
        case 'reset' :
            return initialState;
        default : 
            return state;
    }    
}

function ReducerHookOne() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (

        <div className="container">
            <p>Reducer Hook Count : {count}</p>
            <button onClick={()=> dispatch('increment')}>Increase</button>
            <button onClick={()=> dispatch('decrement')}>Decrease</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerHookOne
