import React, { useContext } from 'react'
import { CountContext } from '../ReducerWithContext';
import ComponentB1 from './ComponentB1';

function ComponentA1() {
    const CountContextA = useContext(CountContext);
    return (
        <div>
            Component A1
             <p>Reducer Hook Count : {CountContextA.countState}</p>
            <button onClick={()=> CountContextA.countDispatch('increment')}>Increase</button>
            <button onClick={()=> CountContextA.countDispatch('decrement')}>Decrease</button>
            <button onClick={()=> CountContextA.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA1
