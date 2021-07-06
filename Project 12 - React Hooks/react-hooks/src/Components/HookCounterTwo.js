import React, {useState, useEffect} from 'react'

function HookCounterTwo() {
    const [count,setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{
        console.log('updating');
        document.title = `You clicked ${count} times`;

    },[count]); //use effects only run when count changes

    return (
        <div className="container">
            <input type='text' value={name}
                onChange = {(e)=>{
                    setName(e.target.value);
                }}
            ></input>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
            <button onClick={()=> setCount(count+1)}>Increase</button>
        </div>
    )
}

export default HookCounterTwo;
