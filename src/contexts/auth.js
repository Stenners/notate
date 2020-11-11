import React, { createContext, useState, useContext, useEffect } from "react";
import { getFirebaseClient } from "../firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [firebase, setFirebase] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firebase = getFirebaseClient();
    setFirebase(firebase);
    const auth = firebase.auth();
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, firebase }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
