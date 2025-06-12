import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface AuthContextType {
  username: string;
  isSignedIn: boolean;
  signIn: (username: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = (uname: string) => {
    setUsername(uname);
    setIsSignedIn(true);
  };

  const signOut = () => {
    setUsername('');
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ username, isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
