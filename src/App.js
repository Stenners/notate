import React from 'react';
import { Router } from "@reach/router";
import PrivateRoute from './PrivateRoute'
import Editor from './Editor'
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <PrivateRoute as={Editor} path="/" />
        {/* <Editor path="/"/> */}
        {/* <div className="App">
          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
              return (
                <pre>
                  {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                </pre>
              );
            }}
          </FirebaseAuthConsumer>
          <button
            onClick={async () => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              await firebase.auth().signInWithPopup(googleAuthProvider);
            }}
          >
            Login
          </button>
        </div> */}
      </Router>
    </>
  );
}

export default App;
