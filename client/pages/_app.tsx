import { useState } from 'react';
import type { AppProps } from 'next/app';
import { LoginContext } from '../contexts/Context';
import { OnlineUsersContext } from '../contexts/OnlineUsers';
import '../styles/globals.css';
import { SocketContext, socket } from '../contexts/Socket';

function MyApp({ Component, pageProps }: AppProps) {
  const [loginInfo, setLoginInfo] = useState();

  // useEffect(()=> {

  //   //
  //   //Get login info from cookies
  //   //if login info from cookies, set login info to login info using setLoginInfo
  //   // else nothing
  // }, [])

  //In naother file to set cookies
  //helper file with all cookie methods for using set cookie  and get cookies

  return (
    //<ChatServer />
    <SocketContext.Provider value={socket}>
      <LoginContext.Provider
        value={{
          loginInfo: loginInfo,
          setLoginInfo: setLoginInfo,
        }}
      >
        <Component {...pageProps} />
      </LoginContext.Provider>
    </SocketContext.Provider>
  );
}

export default MyApp;
