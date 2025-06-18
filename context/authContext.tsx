// context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getToken, saveToken,  getUser, saveUser,} from '@/lib/tokenStorage';

interface AuthContextType {
  isLoggedIn: boolean;
  user: any;
  login: (token: string, user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadAuth = async () => {
      const token = await getToken();
      const savedUser = await getUser();
      if (token) {
        setIsLoggedIn(true);
        setUser(savedUser);
      }
    };
    loadAuth();
  }, []);

  const login = async (token: string, user: any) => {
    await saveToken(token);
    await saveUser(user);
    setIsLoggedIn(true);
    setUser(user);
  };

  const logout = async () => {
  
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
