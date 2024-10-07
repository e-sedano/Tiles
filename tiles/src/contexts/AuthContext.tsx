import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, UserCredential } from 'firebase/auth'
import { auth } from '../firebase'

interface AuthContextType {
  currentUser: User | null;
  emailSignUp: (email: string, password: string) => Promise<UserCredential>;
  emailLogIn: (email: string, password: string) => Promise<UserCredential>;
  getUser: () => User | null;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children } : AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  function emailSignUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function emailLogIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function getUser() {
    return auth.currentUser;
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, emailSignUp, emailLogIn, getUser, logOut }}>
      { !loading && children }
    </AuthContext.Provider>
  )
}