import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const ChatServer: React.FunctionComponent = (props) => {
  //RENDER a list of messages

  //Fetch a chathistory

  //OnClick if message is not empty push message content
  function handleSubmit(content: String) {
    //chatHistory.push(content);

    //Re-render chathistory

    //Patch backend chathistory with the corresponding diem ID

    useEffect(() => {});
  }

  //Render a list with all chat history for that diem
  //Text input field with submit button

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
