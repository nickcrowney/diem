import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import props from "../services/ApiServices";

import hooks from "../services/ApiServices";
import Message from "./Message";
import { SocketContext } from "../contexts/Socket";
import { LoginContext } from "../contexts/Context";
import styles from "./ChatServer.module.css";
import { useForm } from "react-hook-form";

const ChatServer: React.FunctionComponent = ({ currentDiem }) => {
  const socket = useContext(SocketContext);
  const { loginInfo } = useContext(LoginContext);
  const { register, handleSubmit, reset } = useForm();

  //TODO Fetch the diem with curDiem.id and populate the starting state of
  //history
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // let result = getHistory();
    if (currentDiem.chatHistory) {
      let res = hooks
        .getDiemById(currentDiem.id)
        .then((res) => res.json())
        .then((res) => setHistory((prev) => res.chatHistory));
    }
  }, []);

  socket.on("updatedMessages", (message) => {
    setHistory((prev) =>
      [...prev, message].filter(
        (val, ind) => [...prev, message].indexOf(val) === ind
      )
    );
  });

  // const mockData = [
  //   { content: "This is a message", author: 1, timestamp: "Friday" },
  //   { content: "A second message", author: 1, timestamp: "Wednesday" },
  //   { content: "Yet another message", author: 2, timestamp: "Sunday" },
  // ];

  function handleSubmitMessage(data: React.FormEvent<HTMLInputElement>) {
    hooks.modifyDiemChatHistory(
      data.message,
      currentDiem.id,
      loginInfo.email,
      String(Date.now())
    );
    reset({ message: "" });

    let mes = {
      content: data.message,
      author: loginInfo.email,
      timestamp: String(Date.now()),
    };

    socket.emit("message", mes);
  }

  return (
    <>
      <div className={styles.form_contianer}>
        {history.length && (
          <div className={styles.message_container}>
            {history &&
              history.map((el) => {
                return <Message el={el} />;
              })}
          </div>
        )}
        {currentDiem && (
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
        )}
      </div>
    </>
  );
};
export default ChatServer;
