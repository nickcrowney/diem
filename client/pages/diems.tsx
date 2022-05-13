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
import { disconnect } from "process";

const Diems: NextPage = () => {
  const socket = io("http://localhost:4000");

  const [onlineStatus, setOnlineStatus] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([])  //Grab onlineStatus emits from other users and use this to render online symbol

  //IF a user's socket id belongs to a user whose email state exists in context, emit to other users that that user is online

  socket.on("connect", (arg) => {
    console.log("connected to Sockets on front end");
    setOnlineStatus(true)
    socket.emit("online", onlineStatus )

    }
  });

  useEffect(()=> {
    socket.on
  })







  const { state, setLoginInfo } = useLoginContext();

  //const state = useLoginContext()
  const [newDiemPop, setNewDiemPop] = useState(false);
  const [data, setData] = useState("");
  const [mainDiem, setDiem] = useState("");
  const [allDiems, setAllDiems] = useState([]);
  const [currentDiem, setCurrentDiem] = useState({
    title: "Select Diem",
  });

  useEffect(() => {
    console.log(currentDiem, "CURR DEEZ NUTZ");
  }, [currentDiem]);
  const [users, setUsers] = useState([]);
  //console.log(currentDiem, "RENDER DAMNIT");

  if (state) {
    //console.warn(state.loginInfo);
    // console.log("FUCK");
    // console.log(state.userInfo);
  }

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
  //console.log(hooks.getDiems(), "AWAITED DIEMS");
  // const currentDate = dayjs().toISOString(); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
  return (
    <div>
      {state && (
        <Nav
          users={users}
          setUsers={setUsers}
          toggleNewDiemPop={setNewDiemPop}
        />
      )}
      <main className={styles.container}>
        <div className={styles.tiles}>
          <PopNewDiem />

          {allDiems.map((el) => {
            return (
              <div key={el.id}>
                <Tile
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
