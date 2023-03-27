
import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);

  return (
    <>
    <h1>LoginPage</h1>
    <br></br>
    <pre>
      {JSON.stringify(user, null, 3)}
    </pre>
    <button
    className='btn btn-primary'
    onClick={() => setUser({id: 2, name: 'stylo', email:'stylo@mail.com'})}
    >
      Set User
    </button>
    </>
  )
}
