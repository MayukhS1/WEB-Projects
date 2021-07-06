import React, {useState, useEffect} from 'react'

function HookCounterTwo() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    })

    return (
        <div className="container">
            <button onClick={()=> setCount(count-1)}>Decrease</button>
            <button onClick={()=> setCount(count+1)}>Increase</button>
        </div>
    )
}

export default HookCounterTwo;
