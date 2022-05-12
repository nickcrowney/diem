<<<<<<< HEAD
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
=======
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
>>>>>>> 0dfea56943d8103f846e20e8786fe2072790e920
}

export default MyApp;
