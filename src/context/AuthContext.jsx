import { createContext, useContext, useState } from 'react';
import { users } from '../data/staticData';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const userWithoutPassword = { ...foundUser, password: undefined };
      setUser(userWithoutPassword);
      return userWithoutPassword;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);