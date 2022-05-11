import { createStore } from "redux"; // Plain Redux
import { configureStore } from "@reduxjs/toolkit";

import { useSelector, useDispatch, Provider } from "react-redux"; // Library to integrate Redux into React
console.clear();

// createStore( ROOT_REDUCER_FUNCTION );
const initialState = { loginData: [] };

//Reducer
const rootReducer = function (state = initialState, action: any) {
  console.log("Reducer called()", action);
  if (action.type === "POPULATE") {
    //Get all user login data
    console.log(">>", state);
    const newData = state.loginData;
    return { ...state, loginData: [newData] };
  }
  return state;
};

//Store
const loginInfo = createStore(rootReducer);
loginInfo.subscribe(() => {
  console.log("State changed", loginInfo.getState());
});

// const loginInfo = configureStore({
//     reducer: {
//         data: rootReducer
//     }
// })

//Actions
//const Action = { type: 'POPULATE', data: *info* }
const Action = function (data) {
  const action = { type: "POPULATE", data: data };
  return action;
};

//This function is called inside onclick in the login page
function getLoginInfo(data: any) {
  const dispatch = useDispatch();
  console.log(dispatch);
  function getInfo() {
    dispatch({ type: "POPULATE", loginData: data });
  }
}
