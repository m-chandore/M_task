import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    // firstName, lastName, email, token, id
    localStorage.removeItem("user-id");
    localStorage.removeItem("user-email");
    localStorage.removeItem("user-token");
    localStorage.removeItem("user-fname");
    localStorage.removeItem("user-lname");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
