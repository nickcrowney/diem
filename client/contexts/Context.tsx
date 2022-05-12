import React, { useContext, createContext, useState, useEffect } from "react";

export const LoginContext = createContext({});

export const loginProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState([]);
  React.useEffect(() => {}, []);
  const values = React.useMemo(
    () => ({
      loginInfo,
      setLoginInfo,
    }),
    [loginInfo]
  );
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export function useLoginContext() {
  const context = useContext(LoginContext);
  if (!context) {
    console.error("Error deploying App Context!!!");
  }
  return context;
}

export default useLoginContext;
