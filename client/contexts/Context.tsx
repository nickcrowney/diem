import React, { useContext, createContext, useState, useEffect } from "react";

export const LoginContext = createContext({});

export function useLoginContext() {
  const context = useContext(LoginContext);
  if (!context) {
    console.error("Error deploying App Context!!!");
  }
  return context;
}

export default useLoginContext;
