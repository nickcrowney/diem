import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../firebase-config";
import props from "../services/ApiServices";

const Login = () => {
  const [loginData, setLoginData] = useState({}); //Use this to identify the current user
  const [users, setUsers] = useState([]);

  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const allUsers = props.getUsers();
  console.log(props.getUsers(), "USERSSSS");

  // setUsers((prev)=> [prev, ...allUsers])

  const signIn = async () => {
    const response = await signInWithPopup(firebaseAuth, provider); //All the data
    // setLoginData({response.user});
    console.log(loginData, "LOGINDATA");
    console.log(response.user, "TESTS");

    // useEffect(() => {
    //   setLoginData((prev) => [response]);
    // }, []);

    //TODO move this to api services
    // const submitNewUser = async (
    //   name: String,
    //   email: String,
    //   picture: String
    // ) => {
    //   const response = await fetch("http://localhost:4000/user", {
    //     method: "POST",
    //     body: JSON.stringify({ name, email, picture }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // };

    // const loginInput = (val: any) => {
    //   setLoginData(val);
    // };

    //If user is new, POST new user
    props.submitNewUser(
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
