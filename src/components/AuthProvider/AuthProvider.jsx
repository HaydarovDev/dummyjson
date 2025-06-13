import React, { useState } from "react";
import AuthContext from "../AuthContext";

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);
  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
