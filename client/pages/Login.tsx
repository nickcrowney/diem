import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { firebaseApp } from '../firebase-config';
import props from '../services/ApiServices';
import usersHook from '../services/testHook';
import { useLoginContext } from '../contexts/Context';
import { useRouter } from 'next/router';
import styles from '../components/Login.module.css';

const Login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const { loginInfo, setLoginInfo } = useLoginContext();
  const [loggedUsers, setLoggedUsers] = useState([]);
  // const { state } = usersHook(); //All our users
  // console.log(state, 'STATE BEFORE BEFORE');
  let state = [];
  useEffect(() => {
    setLoggedUsers(state);
  }, []);
  const signIn = async () => {
    state = await props.getUsers();
    await setLoggedUsers(state);
    const response = await signInWithPopup(firebaseAuth, provider);
    setLoginInfo(response.user);
    await console.log(state, 'STATE BEFORE');
    await console.log(loggedUsers, 'STATE BEFORE');

    if (
      state.length === 0 ||
      (state && state.some((el): any => el.email !== response.user.email))
    ) {
      //TODO change any to appropiate interface
      console.log(state, ' STATE');
      props.submitNewUser(
        response.user.displayName,
        response.user.email,
        response.user.photoURL
      );
    }

    if (response.user.emailVerified) {
      router.replace('/diems');
    }
    //TODO Throw invalid login error here
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.groupCircles}>
        <div className={styles.circle} id={styles.red}></div>
        <div className={styles.circle} id={styles.orange}></div>
        <div className={styles.circle} id={styles.yellow}></div>
        <div className={styles.circle} id={styles.green}></div>
        <div className={styles.circle} id={styles.purple}></div>
      </div>
      <div className={styles.typewriter}>
        <h1>Diem</h1>
      </div>
      {state && (
        <div className="flex justify-center items-center">
          <div
            className="w-2/6 flex justify-center items-center border border-gray-300 rounded-full p-4 bg-white cursor-pointer hover:shadow-md"
            onClick={signIn}
          >
            <FcGoogle fontSize={40} />
            <p className="text-lg font-semibold ml-4">Sign in</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
