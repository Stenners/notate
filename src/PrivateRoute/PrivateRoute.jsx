import React, { useContext } from 'react'
import Login from '../Login'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebaseContext from '../firebase'

const PrivateRoute = props => {
  const fb = useContext(firebaseContext)
  const { as: Comp, ...rest } = props
  const [user, initialising, error] = useAuthState(fb.auth)

  if (initialising) {
    return null
  } else if (error) {
    return <Login />
  }
  return (user) ? <Comp {...rest} user={user} /> : <Login />
}

export default PrivateRoute
