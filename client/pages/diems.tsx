import type { NextPage } from "next";
import Nav from "../components/Nav";
import Tile from "../components/Tile";
import Diem from "../components/Diem";
import PopNewDiem from "../components/PopNewDiem";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import hooks from "../services/ApiServices";
import { async } from "@firebase/util";
import { useLoginContext } from "../contexts/Context";
import io from "socket.io-client";

const Diems: NextPage = (props) => {
  const socket = io("http://localhost:4000");

  const [onlineStatus, setOnlineStatus] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]); //Grab onlineStatus emits from other users and use this to render online
  const { loginInfo, setLoginInfo } = useLoginContext();
  const [newDiemPop, setNewDiemPop] = useState(false);
  const [data, setData] = useState("");
  const [mainDiem, setDiem] = useState("");
  const [allDiems, setAllDiems] = useState([]);

  console.log(loginInfo, "LOGIN INFO");

  async function connectionToSocketRoom(diem: any) {
    console.log("CONNECTION FUNCTION TRIGGERED", diem);
    //This will change the current chat room to the maindiem's chatroom
    socket.emit("leavingroom");
    console.log("Current Diem has changed");

    socket.emit("joinroom", diem.id); //Send to backend socket to inform it to join room with correct diemId.
    console.log(`Connected to room with diemId ${diem.id}`);
  }

  //IF a user's socket id belongs to a user whose email state exists in context, emit to other users that that user is online

  let socId = "00000000";
  const [history, setHistory] = useState();

  const [currentDiem, setCurrentDiem] = useState({
    title: "Select Diem",
    id: 1,
  });

  socket.on("connect", (arg) => {
    ////MAIN SOCKET CONNECTION
    //On connection set onlineStatus to true
    socId = socket.id;
    console.log("connected to Sockets on front end");
    setOnlineStatus(true);

    socket.emit("online", onlineStatus);
  });

  // useEffect(() => {
  //   //This will change the current chat room to the maindiem's chatroom
  //   // socket.emit("leavingroom");
  //   console.log("Current Diem has changed");

  //   // socket.emit("joinroom", currentDiem.id); //Send to backend socket to inform it to join room with correct diemId.
  //   // console.log(`Connected to room with diemId ${currentDiem.id}`);
  // }, [currentDiem]);

  // socket.on("updateMessages", (messages) => {
  //   //When we recieve the updated message history from backend
  //   setHistory((prev) => messages);
  //   console.log(messages);
  //   //chatHistory: messages; //Set the most updated chat history to chatHistory of the diem
  //   // console.log(messages);
  // });

  // socket.on("onlineUsers", (onlineUserIds) => {
  //   ///SEE IF USER IS ONLINE not used right now
  //   //When we recieve the online users
  //   console.log(onlineUserIds);
  //   setOnlineUsers(onlineUserIds);
  // });

  // socket.on("disconnect" () => {
  //   console.log(`User has disconnected`)
  // });

  useEffect(() => {}, [currentDiem]);
  const [users, setUsers] = useState([]);
  //console.log(currentDiem, "RENDER DAMNIT");

  // if (state) {
  //   console.warn("Testing context", state);
  //   console.log("Inside if");
  //   console.log(state.userInfo);
  // }

  useEffect(() => {}, [data]);
  useEffect(() => {
    hooks
      .getUsers()
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    hooks
      .getDiems()
      .then((res) => {
        setAllDiems(res);
        setCurrentDiem(res[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {
        <Nav
          loginData={loginInfo}
          users={users}
          setUsers={setUsers}
          toggleNewDiemPop={setNewDiemPop}
        />
      }
      <main className={styles.container}>
        <div className={styles.tiles}>
          <PopNewDiem />

          {allDiems.map((el) => {
            return (
              <div key={el.id}>
                <Tile
                  func={connectionToSocketRoom}
                  setDiem={setDiem}
                  mainDiem={mainDiem}
                  allDiems={allDiems}
                  setAllDiems={setAllDiems}
                  diem={el}
                  setCurrentDiem={setCurrentDiem}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.diem}>
          <Diem
            mainDiem={mainDiem}
            currentDiem={currentDiem}
            setCurrentDiem={setCurrentDiem}
            users={users}
          />
        </div>
      </main>
    </div>
  );
};

export default Diems;
