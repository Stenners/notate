import React from 'react'
import * as firebase from 'firebase/app'

const Login = () => (
  <button
    onClick={async () => {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithPopup(googleAuthProvider)
    }}
  >
    Login
  </button>
)

export default Login
