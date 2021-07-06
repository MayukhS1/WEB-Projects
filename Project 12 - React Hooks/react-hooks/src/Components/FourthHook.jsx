import React, { useState } from 'react';

function FourthHook() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items,
        { id: items.length, value: Math.floor(Math.random() * 10) }
        ]);
    }

    return (
        <div>
            <button onClick={addItem}>Add random Number</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>

    );
}

export default FourthHook;