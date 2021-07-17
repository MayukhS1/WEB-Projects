import React, {useMemo, useState} from 'react'

function CountMemoHook() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const isEven = useMemo(() =>{
        let i = 0;
        while(i<200000000) i++;
        if(countOne%2===0)
            return true;
        return false;
    },[countOne]);

    return (
        <div>
            <div>
                <button onClick={()=>{
                    setCountOne(countOne+1);
                }}>Increment by 1 - {countOne}</button>
            </div>
            <div>
                {isEven?'Even':'Odd'}
            </div>
            <div>
                <button onClick={()=>{
                    setCountTwo(countTwo+2);
                }}>Increment by 2 - {countTwo}</button>
            </div> 
        </div>
    )
}

export default CountMemoHook
