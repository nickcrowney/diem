import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const ChatServer: React.FunctionComponent = (props) => {
  const socket = io("http://192.168.1.150.4000");

  //RENDER a list of messages

  //OnClick if message is not empty push message content
  function handleSubmit(content: String) {
    chatHistory.push(content);
    //Re-render chathistory

    //Patch backend chathistory with the corresponding diem ID

    useEffect(() => {});
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white relative">
      <div className="historyContainer">
        {/* {chatHistory && chatHistory.map((mes) => {
            return (
                <div>{mes.content}</div>
                <div>{mes.author}</div>
                <div>{mes.timestamp}</div>

        })} */}
      </div>
      <div className="inputContainer">
        <input></input>
        <button></button>
      </div>
    </div>
  );
};
