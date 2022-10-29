import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithRedirect,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../Firebase/Firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googlesignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    // signInWithPopup(auth, googleProvider);
    signInWithRedirect(auth, googleProvider);
  };

  const FacebookSignIn = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithRedirect(auth, facebookProvider);
  };

  const SignUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const LoginWithEmail = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const ResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (Currentuser) => {
      setUser(Currentuser);
      console.log(Currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={({googlesignIn,FacebookSignIn, signOut, SignUpWithEmail,LoginWithEmail, ResetPassword ,user})}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
