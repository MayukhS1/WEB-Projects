import React, { useCallback, useState } from 'react'
import CallBackHookChild from './ChildComponents/CallBackHookChild'


function CallBackHook() {
    const [salary, setSalary] = useState(25000);
    const [age, setAge] = useState(25);

    const increaseAge = useCallback(() => {
        console.log('rendering increase age function');
        setAge(age+1);
    },[age]);

    const increaseSalary = useCallback(() => {
        console.log('rendering increase sal function');
        setSalary(salary+1000);
    },[salary]);
    
    const value = {
        age : age,
        salary : salary
    }
    return (
        <div>
            <CallBackHookChild value={value}/>
            <button onClick={increaseAge}>Increase Age</button>
            <button onClick={increaseSalary}>Increase Salary</button>
        </div>
    )
}

export default CallBackHook
