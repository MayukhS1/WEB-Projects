import React, {useContext} from 'react'
import { CountContext } from '../ReducerWithContext'

function ComponentC1() {
    const CountContextC = useContext(CountContext);
    return (
        <div>
            Component C1
            <p>Reducer Hook Count : {CountContextC.countState}</p>
            <button onClick={()=> CountContextC.countDispatch('increment')}>Increase</button>
            <button onClick={()=> CountContextC.countDispatch('decrement')}>Decrease</button>
            <button onClick={()=> CountContextC.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentC1
