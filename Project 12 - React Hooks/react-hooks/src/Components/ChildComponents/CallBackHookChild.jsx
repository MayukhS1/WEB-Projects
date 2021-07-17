import React from 'react'

function CallBackHookChild({value}) {
    console.log('rendering child',value);
    return (
        <div>
            <h3>Age is : {value.age}</h3>
            <h3>Salary is : {value.salary}</h3>
        </div>
    )
}

export default CallBackHookChild
