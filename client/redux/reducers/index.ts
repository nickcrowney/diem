// function counterReducer(state = initialState, action, data) {
//   // Reducers usually look at the type of action that happened
//   // to decide how to update the state
//   if (action.type === "userdata/initialized") {
//     return { ...state, loginData: data };
//   }
// }
import React from "react";
import { ReactDOM } from "react";
import App from "./index";
import { createStore } from "redux";
import { ActionCodeOperation } from "@firebase/auth";

const initialState = {
  loginData: [],
};

//action
const populate = () => {
  return {
    type: "Logindata/POPULATE",
  };
};

//reducer

const loginReducer = (state = initialState);
