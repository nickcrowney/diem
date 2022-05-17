import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import getDiemById from "../services/ApiServices";

import hooks from "../services/ApiServices";
import Message from "./Message";
import { SocketContext } from "../contexts/Socket";
import { LoginContext } from "../contexts/Context";
import styles from "./ChatServer.module.css";
import e from "express";
import { useForm } from "react-hook-form";

const ChatServer: React.FunctionComponent = (props) => {
  //; //currentdiemchat history
  const socket = useContext(SocketContext);
  const { loginInfo } = useContext(LoginContext);
  const { register, handleSubmit, reset } = useForm();
  console.log(props.currentDiem.chatHistory, "CHAT HISTORY PROP");

  //On loading component, fetch chathistory from database

  // const [history, setHistory] = useState([]);

  // const [mes, setMes] = React.useState({
  //   content: "empty",
  //   author: loginInfo.email,
  //   timestamp: Date.now(),
  // });

  //const [history, setHistory] = useState(getDiemById(props.currentDiem.id).chatHistory); //fetch updated chat history each time we load chatServer component

  const [history, setHistory] = useState(props.currentDiem.chatHistory);

  //setHistory(currentDiem.chatHistory);

  // const mockData = [
  //   { content: "This is a message", author: 1, timestamp: "Friday" },
  //   { content: "A second message", author: 1, timestamp: "Wednesday" },
  //   { content: "Yet another message", author: 2, timestamp: "Sunday" },
  // ];

  // const [history, setHistory] = useState(mockData);
  //const [history, setHistory] = useState([]);
  //setHistory((prev) => currentDiem.chatHistory)//TODO fetch the chat history data from the currently selected diem

  //Recieve an updated message
  socket.on("updatedMessages", (message) => {
    setHistory((prev) => [...prev, message]);
  });

  useEffect(() => {}, [history]);

  //console.log(history, "HISTORY");

  // function handleSubmitMessage(e) {
  //   e.preventDefault();
  //   let time = Date.now();
  //    //updateDiemChatHistory(e.value, loginInfo.email, time);
  //   socket.emit("message", { e.value, loginInfo.email, time});
  // }

  function handleSubmitMessage(data: React.FormEvent<HTMLInputElement>) {
    console.log(data, "LOGGIN E");
    console.log(data.message, "input value");

    let newMessage = {
      message: "data.message",
      author: "Email",
      //author: loginInfo.email
      timestamp: "String(Date.now())",
    };

    hooks.modifyDiemChatHistory(
      newMessage.message,
      3,

      newMessage.author,
      newMessage.timestamp
    );

    setHistory(
      (prev) => [
        ...prev,
        { content: data.message, author: "ME", timestamp: String(Date.now()) },
      ]

      //{ content: e.value, author: loginInfo.name, timestamp: "" + Date.now() },

      //{ content: e.value, author: loginInfo.name, timestamp: "" + Date.now() },  //TODO
    );
    reset({ message: "" });
  }

  return (
    <>
      <div className={styles.form_contianer}>
        {history &&
          props.currentDiem(
            <div className={styles.message_container}>
              {props.currentDiem.chatHistory.map((el) => {
                return <Message el={el} />;
              })}
            </div>
          )}

        <div className={styles.form_container}>
          <form
            id="messages"
            name="messages"
            className={styles.form}
            onSubmit={() => {
              handleSubmit((data) => {
                console.log(data, "DATA");
                handleSubmitMessage(data);
              });
            }}
          >
            <label htmlFor="userLogin">Message Container</label>
            <input
              type="text"
              id="inputValue"
              name="inputValue"
              className="py-2 px-4 rounded"
              {...register("message")}
              placeholder="enter message"
            />

            <input
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default ChatServer;
