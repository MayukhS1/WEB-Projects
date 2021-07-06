import React, { useState } from "react";

const HookCounter = () =>{

    const [count, setCount] = useState (0); //its called array destructering


    const resetCount = () => {
        for (let index = Math.abs(count); index >= 0; index--) {
            setCount(index);   
        }
    }

    return (
        <div className="container">
            <p>Hook Count : {count}</p>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
            <button onClick={()=> setCount(count+1)}>Increase</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default HookCounter;