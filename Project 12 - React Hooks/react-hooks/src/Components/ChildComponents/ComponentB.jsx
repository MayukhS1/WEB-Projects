import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import { UserNameContext } from '../ContextHookOne'
import { UserEmailContext } from '../ContextHookOne'

function ComponentB() {
    const user = useContext(UserNameContext);
    const email = useContext(UserEmailContext);
    return (
        <div>
            <h2>{user}</h2>
            <h4>{email}</h4>
            <ComponentC/>
        </div>
    )
}

export default ComponentB
