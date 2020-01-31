import React from 'react';
import Login from '../Login'
import { FirebaseAuthConsumer } from '@react-firebase/auth'

const PrivateRoute = (props) => {
  
  const { as: Comp, ...rest } = props;
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn }) => {
        return isSignedIn ? <Comp {...rest} /> : <Login />;
      }}
    </FirebaseAuthConsumer>
  )
};

export default PrivateRoute;