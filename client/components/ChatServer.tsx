import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import getDiems from "../services/ApiServices";
import updateDiemChatHistory from "../services/ApiServices";

const ChatServer: React.FunctionComponent = (props) => {
  const socket = io("http://localhost:4000");
  //RENDER a list of messages
  // const chatHis = props.chatHistory;
  const [history, setHistory] = useState();

  socket.emit("joinDiemRoom", props.diemId); //Send to backend socket to inform it to join room with correct diemId.

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
    //Emit the most recent message user sends
    socket.emit("newMessage", {
      //Emit the new message to backend
      author: Number,
      content: String,
      timestamp: String,
    });

    //Set user's local history NOT NEEDED
    //setHistory((prev) => [...prev, { author: Number, content: String, timestamp: String}]);

    //PATCH request to update the chatHistory of current diem

    updateDiemChatHistory(props.diemId, [
      ...history,
      { author, content, timestamp },
    ]);
  }

  //Render a list with all chat history for that diem
  //Text input field with submit button

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white relative">
      <div className="historyContainer">
        {/* {history && history.map((mes) => {
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
