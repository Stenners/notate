import React from 'react'
import Login from '../Login'
import { useAuth } from '../../contexts/auth'

const PrivateRoute = props => {
  const { user, firebase } = useAuth();
  const { as: Comp, ...rest } = props;
  console.log('user', user);
  return (user) ? <Comp {...rest} user={user} /> : <Login firebase={firebase} />;
}

export default PrivateRoute
