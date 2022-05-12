<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../firebase-config";
import props from "../services/ApiServices";
import usersHook from "../services/testHook";
import { useLoginContext } from "../contexts/Context";
=======
import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { firebaseApp } from '../firebase-config';
import props from '../services/ApiServices';
import usersHook from '../services/testHook';
>>>>>>> 0dfea56943d8103f846e20e8786fe2072790e920

const Login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const { loginInfo, setLoginInfo } = useLoginContext();

  const { state } = usersHook(); //All our users

  const signIn = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);

    setLoginInfo(response.user);

    //If user exists in database, we don't re-POST them to db
    if (
      state !== 'undefined' && //Don't think you need the second half of this logic
      state.some((el): any => el.email !== response.user.email)
    ) {
      //TODO change any to appropiate interface
      props.submitNewUser(
        response.user.displayName,
        response.user.email,
        response.user.photoURL
      );
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-50"></div>
      <div
        className="z-10 flex justify-center items-center border border-gray-300 rounded-full p-2 bg-white bg-opacity-60 cursor-pointer hover:shadow-md hover:bg-opacity-100"
        onClick={signIn}
      >
        <FcGoogle fontSize={30} />
        <p className="text-lg font-semibold ml-4">Sign in with Google</p>
      </div>
    </div>
  );
};

export default Login;
