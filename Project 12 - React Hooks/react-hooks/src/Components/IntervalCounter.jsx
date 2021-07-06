import React, {useEffect, useState} from 'react'

function IntervalCounter() {
    const [count, setcount] = useState(0);
   

    useEffect(()=>{
        
        const tick = () => {
            setcount(count+1);
        }

        const interval = setInterval(tick,1000);
        return () => {
            clearInterval(interval);
        } 
    },[count]);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default IntervalCounter
