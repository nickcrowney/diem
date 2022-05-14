import type { NextPage } from "next";
import Nav from "../components/Nav";
import Tile from "../components/Tile";
import Diem from "../components/Diem";
import PopNewDiem from "../components/PopNewDiem";
import styles from "../styles/Home.module.css";
import { useEffect, useState, useCallback } from "react";
import dayjs from "dayjs";
import hooks from "../services/ApiServices";
import { async } from "@firebase/util";
import { useLoginContext } from "../contexts/Context";
import io, { Socket } from "socket.io-client";

const Diems: NextPage = (props) => {
  const socket = io("http://localhost:4000");

  const [onlineUsers, setOnlineUsers] = useState([]); //Grab onlineStatus emits from other users and use this to render online
  const { loginInfo, setLoginInfo } = useLoginContext();
  const [newDiemPop, setNewDiemPop] = useState(false);
  const [data, setData] = useState("");
  const [mainDiem, setDiem] = useState("");
  const [allDiems, setAllDiems] = useState([]);
  const [history, setHistory] = useState([]);

  console.log(loginInfo, "LOGIN INFO");

  //On connection, emit that this user is online to all other users
  socket.on("connect", (arg) => {
    console.log("connected to Sockets on front end");
    // socket.emit("currentlyOnline", loginInfo.email);
  });

  //When we recieve the message array from backend, set the updated state of history
  socket.on("updatedMessages", (message) => {
    setHistory((prev) => [...prev, message]);
  });

  //When we recieve current online user update, we set state of current online users
  socket.on("onlineUsers", (onlineUserIds) => {
    setOnlineUsers(onlineUserIds);
  });

  // //Function being passed to the tile component
  async function connectionToSocketRoom(diem: any) {
    console.log("CONNECTION FUNCTION TRIGGERED", diem);
    //This will change the current chat room to the maindiem's chatroom
    socket.emit("leavingRoom"); //Leave the current roomsocket.
    socket.emit("joiningRoom", diem.id); //Join the new room
  }

  // socket.emit("joiningRoom", diem.id); //Send to backend socket to inform it to join room with correct diemId.
  // console.log(`Connected to room with diemId ${diem.id}`);

  async function submitMessageSocket(message: any) {
    socket.emit("message", message);
  }

  const [currentDiem, setCurrentDiem] = useState({
    title: "Select Diem",
    id: 1,
  });

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
