import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import getDiems from "../services/ApiServices";
import updateDiemChatHistory from "../services/ApiServices";
import Message from "./Message";
import { SocketContext } from "../contexts/Socket";
import { LoginContext } from "../contexts/Context";
import styles from "./ChatServer.module.css";

const ChatServer: React.FunctionComponent = (props) => {
  const [history, setHistory] = useState([]); //currentdiemchat history
  const socket = useContext(SocketContext);
  const { loginInfo } = useContext(LoginContext);

  const Form = () => {
    const [mes, setMes] = React.useState({
      content: "empty",
      author: loginInfo.email,
      timestamp: Date.now(),
    });
  };
  //TODO setHistory(props.diem.chatHistory)

  //Recieve an updated message
  socket.on("updatedMessages", (message) => {
    setHistory((prev) => [...prev, message]);
  });

  useEffect(() => {}, [history]);

  const mockData = [
    { content: "This is a message", author: 1, timestamp: "Friday" },
    { content: "A second message", author: 1, timestamp: "Wednesday" },
    { content: "Yet another message", author: 2, timestamp: "Sunday" },
  ];

  function handleSubmitMessage(
    content: String,
    author: String,
    timestamp: String
  ) {
    updateDiemChatHistory(content, author, timestamp);
    socket.emit("message", { content, author, timestamp });
  }

  return (
    // <div>
    //   <div className="justify-center items-center bg-white relative">
    //     <div className={styles.message_container}>
    //       {mockData.map((el) => {
    //         return <Message message={el} />;
    //       })}
    //     </div>
    //   </div>
    //   <div className="w-screen h-screen flex justify-center items-center bg-white relative"></div>
    // </div>
    <div className={styles.form_contianer}>
      <div className={styles.message_container}>
        {mockData.map((el) => {
          return <Message message={el} />;
        })}
      </div>
      <div className={styles.form_container}>
        <form id="loginForm" name="loginForm" className={styles.form}>
          <label htmlFor="userLogin">login</label>
          <input
            type="text"
            id="userLogin"
            name="userLogin"
            className="py-2 px-4 rounded"
          />

          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default ChatServer;
