import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoginContext } from "../contexts/Context";
import { useState } from "react";
import ChatServer from "../components/ChatServer";

function MyApp({ Component, pageProps }: AppProps) {
  const [loginInfo, setLoginInfo] = useState();
  return (
    <LoginContext.Provider
      value={{
        loginInfo: loginInfo,
        setLoginInfo: setLoginInfo,
      }}
    >
      <Component {...pageProps} />
    </LoginContext.Provider>
  );
}

export default MyApp;
