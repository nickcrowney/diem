import React, { useContext, createContext, useState, useEffect } from "react";

export const LoginContext = createContext({});

export const loginProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState([]);

  React.useEffect(() => {}, []);

  //
  const values = React.useMemo(
    () => ({
      loginInfo, // States que seran visibles en el contexto.
      setLoginInfo, // Funciones que son exportadas para manejo externo.
    }),
    [loginInfo]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

//
export function useLoginContext() {
  const context = useContext(LoginContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useLoginContext;

//   return (
//     <LoginContext.Provider
//       value={{
//         state: {
//           loginInfo: loginInfo,
//         },
//         setLoginInfo: setLoginInfo,
//       }}
//     ></LoginContext.Provider>
//   );
// };

// export const useLoginInfoContext = () => React.useContext(LoginContext);
