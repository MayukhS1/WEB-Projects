import React, { useState } from 'react';

function ThirdCounter() {
    const [name, setName] = useState({firstName: '', lastName : ''});
    return(
        <form>
            <input type='text' value={name.firstName} onChange={(e)=>{
                setName({...name, firstName: e.target.value});
            }}></input>
            <input type='text' value={name.lastName} onChange={(e)=>{
                setName({...name, lastName: e.target.value}); //... is spread operator that copies all the other field then update
            }}></input>
            <h3>Your Name is : {name.firstName + " " + name.lastName}</h3>
        </form>
    );
}

export default ThirdCounter;