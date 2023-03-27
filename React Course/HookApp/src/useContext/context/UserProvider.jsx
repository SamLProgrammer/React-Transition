
import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({id:1, name: 'sam', email: 'sam@mail.com'});

  return (
    <UserContext.Provider value ={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
