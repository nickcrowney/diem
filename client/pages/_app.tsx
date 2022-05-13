import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoginContext } from "../contexts/Context";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [loginInfo, setLoginInfo] = useState([]);

  return (
    <LoginContext.Provider
      value={{
        state: {
          loginInfo: loginInfo,
        },
        setLoginInfo: setLoginInfo,
      }}
    >
      <Component {...pageProps} />
    </LoginContext.Provider>
  );
}

export default MyApp;
