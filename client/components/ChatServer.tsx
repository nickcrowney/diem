import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import getDiems from "../services/ApiServices";
import updateDiemChatHistory from "../services/ApiServices";

const ChatServer: React.FunctionComponent = (props) => {
  const socket = io("http://localhost:4000");
  //RENDER a list of messages
  // const chatHis = props.chatHistory;
  const [history, setHistory] = useState();

  useEffect(() => {
    socket.on("updateMessages", (messages) => {
      //When we recieve the updated message history
      setHistory((prev) => messages);
      console.log(messages);
      chatHistory: messages; //Set the most updated chat history to chatHistory of the diem
      console.log(messages);
    });
  });

  //Fetch a chathistory from api services

  //OnClick if message is not empty push message content
  function handleSubmit(author: Number, content: String, timestamp: String) {
    socket.emit("newMessage", {
      //Emit the new message to backend
      author: Number,
      content: String,
      timestamp: String,
    });

    setHistory((prev) => [...prev, { author, content, timestamp }]);

    //chatHistory.push(content);

    //Re-render chathistory

    //Patch backend chathistory with the corresponding diem ID
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
