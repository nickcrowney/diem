import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { firebaseApp } from '../firebase-config';

const Login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    const response = await signInWithPopup(firebaseAuth, provider); //All the data
    //console.log(response);

    //TODO move this to api services
    const submitNewUser = async (
      name: String,
      email: String,
      picture: String
    ) => {
      const response = await fetch('http://localhost:4000/user', {
        method: 'POST',
        body: JSON.stringify({ name, email, picture }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    };

    //If user is new, POST new user
    submitNewUser(
      response.user.displayName,
      response.user.email,
      response.user.photoURL
      // response.user.phoneNumber
    );
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
