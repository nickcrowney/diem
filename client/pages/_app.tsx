import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoginContext } from "../contexts/Context";
import { useEffect, useState } from "react";
import ChatServer from "../components/ChatServer";

function MyApp({ Component, pageProps }: AppProps) {
  const [loginInfo, setLoginInfo] = useState();

  useEffect(()=> {
    //
    //Get login info from cookies
    //if login info from cookies, set login info to login info using setLoginInfo
    // else nothing
  }, [])

  //In naother file to set cookies
  //helper file with all cookie methods for using set cookie  and get cookies



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
