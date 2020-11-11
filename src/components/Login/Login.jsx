import React from 'react'

const Login = ({ firebase }) => (
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
