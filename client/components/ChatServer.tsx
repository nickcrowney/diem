import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import props from "../services/ApiServices";

import hooks from "../services/ApiServices";
import Message from "./Message";
import { SocketContext } from "../contexts/Socket";
import { LoginContext } from "../contexts/Context";
import styles from "./ChatServer.module.css";
import e from "express";
import { useForm } from "react-hook-form";

const ChatServer: React.FunctionComponent = ({ curDiem }) => {
  //; //currentdiemchat history
  const socket = useContext(SocketContext);
  const { loginInfo } = useContext(LoginContext);
  const { register, handleSubmit, reset } = useForm();

  //TODO Fetch the diem with curDiem.id and populate the starting state of
  //history

  //WHAT THE CODE SHOULD BE
  /////////////////////////////////
  // const [history, setHistory] = useState(
  //   hooks.getDiemById(curDiem.id).chatHistory
  // );

  socket.on("updatedMessages", (message) => {
    setHistory((prev) => [...prev, message]);
  });

  // useEffect(() => {}, [history]);

  //////////////////////////////////

  //console.log(curDiem.chatHistory, "CHAT HISTORY PROP");

  //On loading component, fetch chathistory from database

  // const [history, setHistory] = useState([]);

  // const [mes, setMes] = React.useState({
  //   content: "empty",
  //   author: loginInfo.email,
  //   timestamp: Date.now(),
  // });

  // console.log(curDiem, "CURRENT DEIM"); //WONT NEED THIS

  // console.log("CHATHISTORY");
  // console.log(hooks.getDiemById(2).chatHistory, "CHATHISTORY");

  // const currentId = curDiem.id;

  // const [history, setHistory] = useState(hooks.getDiemById(currentId)); //fetch updated chat history each time we load chatServer component

  // console.log(history, "Hist");

  //const [history, setHistory] = useState(props.currentDiem.chatHistory);  //Fetch each time we load the component anew

  //setHistory(currentDiem.chatHistory);

  const mockData = [
    { content: "This is a message", author: 1, timestamp: "Friday" },
    { content: "A second message", author: 1, timestamp: "Wednesday" },
    { content: "Yet another message", author: 2, timestamp: "Sunday" },
  ];

  const [history, setHistory] = useState(mockData);
  //const [history, setHistory] = useState([]);
  //setHistory((prev) => currentDiem.chatHistory)//TODO fetch the chat history data from the currently selected diem

  //Recieve an updated message
  // socket.on("updatedMessages", (message) => {
  //   setHistory((prev) => [...prev, message]);
  // });

  useEffect(() => {}, [history]);

  function handleSubmitMessage(data: React.FormEvent<HTMLInputElement>) {
    let newMessage = {
      message: data.message,
      author: loginInfo.email,
      timestamp: String(Date.now()),
    };

    hooks.modifyDiemChatHistory(
      newMessage.message,
      curDiem.id,
      newMessage.author,
      newMessage.timestamp
    );

    setHistory((prev) => [
      ...prev,
      { content: data.message, author: loginInfo.email, timestamp: Date.now() },
    ]);
    reset({ message: "" });
  }

  return (
    <>
      <div className={styles.form_contianer}>
        {history && (
          <div className={styles.message_container}>
            {history.map((el) => {
              return <Message el={el} />;
            })}
          </div>
        )}

        <div className={styles.form_container}>
          <form
            id="message"
            name="message"
            className={styles.form}
            onSubmit={handleSubmit((data) => {
              console.log(data, "DATA");
              handleSubmitMessage(data);
            })}
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
