import React , {useState, useEffect}from 'react'

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const mouseLogListener = (e) => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    } 
    useEffect(()=>{
        console.log('useEffect Called');
        window.addEventListener('mousemove',mouseLogListener);

        return ()=> {
            console.log('removed event listener');
            window.removeEventListener('mousemove',mouseLogListener);
        };  //clean up function

    },[]); // calls the method only for firs render 

    return (
        <div>
            <h2>X = {x}, Y = {y}</h2>        
        </div>
    )
}

export default HookMouse;
