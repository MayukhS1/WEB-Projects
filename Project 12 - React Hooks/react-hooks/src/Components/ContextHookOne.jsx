import React from 'react'
import ComponentA from './ChildComponents/ComponentA'

export const UserNameContext = React.createContext();
export const UserEmailContext = React.createContext();

function ContextHookOne() {
    return (
        <div>
            <UserNameContext.Provider value={`mayukh`}>
                <UserEmailContext.Provider value={`mayukhsasmal@outlook.com`}>
                    <ComponentA/>
                </UserEmailContext.Provider> 
            </UserNameContext.Provider> 
        </div>
    )
}

export default ContextHookOne
