import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import getDiems from "../services/ApiServices";
import updateDiemChatHistory from "../services/ApiServices";
import Message from "./Message";

const ChatServer: React.FunctionComponent = (props) => {
  //   const socket = io("http://localhost:4000");
  //   //RENDER a list of messages
  //   // const chatHis = props.chatHistory;
  //   const mockData = [
  //     { content: "This is a message", author: 1, timestamp: "Friday" },
  //     { content: "A second message", author: 1, timestamp: "Wednesday" },
  //     { content: "Yet another message", author: 2, timestamp: "Sunday" },
  //   ];
  //   const [history, setHistory] = useState();
  //   socket.on("connect", (cb) => {
  //     socket.emit("joinroom", 1); //Send to backend socket to inform it to join room with correct diemId.
  //     console.log("Connected to room 1");
  //   });
  //   // socket.emit("joinroom", 1); //Send to backend socket to inform it to join room with correct diemId.
  //   useEffect(() => {
  //     socket.on("updateMessages", (messages) => {
  //       //When we recieve the updated message history
  //       setHistory((prev) => messages);
  //       console.log(messages);
  //       chatHistory: messages; //Set the most updated chat history to chatHistory of the diem
  //       console.log(messages);
  //     });
  //   }, [history]);
  //   //Fetch a chathistory from api services
  //   //OnClick if message is not empty push message content
  //   function handleSubmit(author: Number, content: String, timestamp: String) {
  //     //Emit the most recent message user sends
  //     socket.emit("newMessage", {
  //       //Emit the new message to backend
  //       author: Number,
  //       content: String,
  //       timestamp: String,
  //     });
  //     //Set user's local history NOT NEEDED
  //     //setHistory((prev) => [...prev, { author: Number, content: String, timestamp: String}]);
  //     //PATCH request to update the chatHistory of current diem
  //     updateDiemChatHistory(props.diemId, [
  //       ...history,
  //       { author, content, timestamp },
  //     ]);
  //   }
  //   //Render a list with all chat history for that diem
  //   //Text input field with submit button
  //   return (
  //     <div className="w-screen h-screen flex justify-center items-center bg-white relative">
  //       {mockData.map((el) => {
  //         return <Message message={el} />;
  //       })}
  //     </div>
  //   );
};
export default ChatServer;
