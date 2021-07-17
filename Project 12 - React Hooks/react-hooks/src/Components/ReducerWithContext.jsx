import React, { useReducer } from 'react'
import ComponentA1 from './ChildComponents/ComponentA1'
import ComponentB1 from './ChildComponents/ComponentB1'
import ComponentC1 from './ChildComponents/ComponentC1'

export const CountContext = React.createContext();

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


function ReducerWithContext() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{countState : count, countDispatch : dispatch}}>
        <div>
            {count}
            <ComponentA1/>
            <ComponentB1/>
            <ComponentC1/>
        </div>
        </CountContext.Provider>
       
    )
}

export default ReducerWithContext
