import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import props from "../services/ApiServices";

import hooks from "../services/ApiServices";
import Message from "./Message";
import { SocketContext } from "../contexts/Socket";
import { LoginContext } from "../contexts/Context";
import styles from "./ChatServer.module.css";
import { useForm } from "react-hook-form";

const ChatServer: React.FunctionComponent = ({ curDiem }) => {
  //; //currentdiemchat history

  const socket = useContext(SocketContext);
  const { loginInfo } = useContext(LoginContext);
  const { register, handleSubmit, reset } = useForm();

  //TODO Fetch the diem with curDiem.id and populate the starting state of
  //history
  const defaultFetch = hooks.getDiemById(curDiem.id).chatHistory;

  const [history, setHistory] = useState(defaultFetch);

  console.log(defaultFetch, "FETCHS");

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

  //const [history, setHistory] = useState(props.currentDiem.chatHistory);  //Fetch each time we load the component anew

  //setHistory(currentDiem.chatHistory);

  const mockData = [
    { content: "This is a message", author: 1, timestamp: "Friday" },
    { content: "A second message", author: 1, timestamp: "Wednesday" },
    { content: "Yet another message", author: 2, timestamp: "Sunday" },
  ];

  const [history, setHistory] = useState(mockData);

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

    setHistory((prev) => {
      if (prev === null) {
        return [
          {
            content: data.message,
            author: loginInfo.email,
            timestamp: Date.now(),
          },
        ];
      } else {
        return [
          ...prev,
          {
            content: data.message,
            author: loginInfo.email,
            timestamp: Date.now(),
          },
        ];
      }
    });
    reset({ message: "" });
  }

  return (
    <>
      <div className={styles.form_contianer}>
        {defaultFetch && history && (
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
