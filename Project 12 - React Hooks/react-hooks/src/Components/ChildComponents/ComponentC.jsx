import React from 'react'

import {UserNameContext, UserEmailContext} from '../ContextHookOne';
function ComponentC() {
    return (
        <div>
            <UserNameContext.Consumer>
            {
                username => {
                    return (
                        <UserEmailContext.Consumer>
                            {
                                email=>{
                                    return (
                                        <div>
                                            <h2>{username}</h2>
                                            <h4>{email}</h4>
                                        </div>
                                    );
                                }
                            }
                        </UserEmailContext.Consumer>
                    )
                }
            }
            </UserNameContext.Consumer>
            
        </div>
    )
}

export default ComponentC
