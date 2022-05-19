import React, { useState, useEffect, useContext } from "react";
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

  const [history, setHistory] = useState([]);

  useEffect(() => {
    console.warn(currentDiem.id);
    currentDiem &&
      currentDiem.chatHistory &&
      fetch(`http://localhost:4000/diem/byId/${currentDiem.id}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.warn(res);
          setHistory((prev) => res.chatHistory);
        });
  }, []);

  socket.on("updatedMessages", (message) => {
    setHistory((prev) =>
      [...prev, message].filter(
        (val, ind) => [...prev, message].indexOf(val) === ind
      )
    );
  });

  function handleSubmitMessage(data: React.FormEvent<HTMLInputElement>) {
    hooks.modifyDiemChatHistory(
      data.message,
      currentDiem.id,
      loginInfo.email,
      String(Date.now()),
      loginInfo.displayName
    );
    reset({ message: "" });

    let mes = {
      content: data.message,
      author: loginInfo.email,
      timestamp: String(Date.now()),
      name: loginInfo.displayName,
    };
    socket.emit("message", mes);
    setHistory((prev) => [...prev, mes]);
  }

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.form_container}>
          <div className={styles.scroll_container}>
            {history.length && (
              <div className={styles.message_container}>
                {history &&
                  history.map((el) => {
                    return <Message el={el} id="right" />;
                  })}
              </div>
            )}
          </div>
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
                {/* <label htmlFor="userLogin">Message Container</label> */}
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
      </div>
    </>
  );
};
export default ChatServer;
