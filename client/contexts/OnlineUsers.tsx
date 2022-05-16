import React, { useContext, createContext, useState, useEffect } from "react";

export const OnlineUsersContext = createContext([]);

export function useOnlineUsersContext() {
  const context = useContext(OnlineUsersContext);
  if (!context) {
    console.error("Error deploying App Context!!!");
  }
  return context;
}

export default useOnlineUsersContext;
