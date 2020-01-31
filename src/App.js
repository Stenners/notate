import React from 'react';
import { Router } from "@reach/router";
import PrivateRoute from './PrivateRoute'
import Editor from './Editor'
import firebaseContext, { fb } from './firebase'

const App = () => {
  return (
    <firebaseContext.Provider value={fb}>
      <Router>
        <PrivateRoute as={Editor} path="/" />
      </Router>
    </firebaseContext.Provider>
  );
}

export default App;
