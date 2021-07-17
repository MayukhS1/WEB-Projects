import React, {useEffect, useRef, useState} from 'react'

function UseRefHook() {

    const inputRef = useRef(null);
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1);
        },1000);
        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    useEffect(()=>{
        //focus input elm using ref hook 
        inputRef.current.focus();
    },[]); //empty dependency to call it only once
    return (
        <div>
            <div>
                Username: 
                <input ref={inputRef} type='text' placeholder='username'></input>
                <br/>
                <br/>
                Password:
                <input type='text' placeholder='password'></input>
            </div>
            
            <div>
                <h2>{timer}</h2>
                <button onClick={()=>{
                    clearInterval(intervalRef.current);
                }}>Clear Timer</button>
            </div>
        </div>
    )
}

export default UseRefHook
