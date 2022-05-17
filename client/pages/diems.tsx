import { useEffect, useState, useContext } from 'react';
import type { NextPage } from 'next';
import Nav from '../components/Nav';
import Tile from '../components/Tile';
import Diem from '../components/Diem';
import PopNewDiem from '../components/PopNewDiem';
import styles from '../styles/Home.module.css';
import dayjs from 'dayjs';
import hooks from '../services/ApiServices';
import { async } from '@firebase/util';
import { useLoginContext } from '../contexts/Context';
import { SocketContext } from '../contexts/Socket';
import io from 'socket.io-client';

const currentDate = dayjs().toISOString().slice(0, 10); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');

// console.log(currentDate, 'CURRENT DATE');

const Diems: NextPage = (props) => {
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]); //Grab onlineStatus emits from other users and use this to render online
  const { loginInfo, setLoginInfo } = useLoginContext();
  const [newDiemPop, setNewDiemPop] = useState(false);
  const [data, setData] = useState('');
  const [mainDiem, setDiem] = useState('');
  const [allDiems, setAllDiems] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState({
    'background-color': '#fabd04',
  });
  const [history, setHistory] = useState([]);

  const [currentDiem, setCurrentDiem] = useState({
    id: 1,
    title: 'Add new diem',
  });

  const socket = useContext(SocketContext);

  socket.on('connect', (arg) => {
    console.log('connected to Sockets on front end');
    //socket.emit("currentlyOnline", loginInfo.email)  //TODO Figure out why context doesn't work here
    socket.emit('currentlyOnline', 'email@email.com');
    socket.emit('joiningRoom', String(currentDiem.id)); //Default user to the top chatroom
  });

  // //When we recieve current online user update, we set state of current online users
  socket.on('onlineUsers', (onlineIds) => {
    setOnlineUsers((prev) => onlineIds);
    console.log('Updated Online Users ', onlineIds);
  });

  useEffect(() => {}, [currentDiem]);
  const [users, setUsers] = useState([]);

  useEffect(() => {}, [data]);
  useEffect(() => {}, [backgroundColor]);
  useEffect(() => {
    hooks
      .getUsers()
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));
  }, []);

  // (res.sort(function (a, b) {
  //   // Turn your strings into dates, and then subtract them
  //   // to get a value that is either negative, positive, or zero.
  //   return new Date(a.date) - new Date(b.date);
  // }))()
  useEffect(() => {
    hooks
      .getDiems()
      .then((res) => {
        const resFuture = res.filter((el) => {
          return new Date(el.date) >= new Date(currentDate);
        });
        setAllDiems(resFuture);
        setAllEvents(
          resFuture.map((el) => {
            console.log(el.events, 'EVENTITOS');
            return el.events;
          })
        );
        setCurrentDiem(resFuture[0]);
        console.log(resFuture[0], 'RES FUTURE 0');
        console.log(resFuture[0].color, 'RES FUTURE COLOR');

        setBackgroundColor({ 'background-color': resFuture[0].color });
      })
      .catch((error) => console.log(error));
  }, []);
  allEvents.length && console.log(allEvents, 'AAAALLLLLLL');
  return (
    <div>
      <Nav
        loginData={loginInfo}
        users={users}
        setUsers={setUsers}
        setNewDiemPop={setNewDiemPop}
      />

      <main className={styles.container}>
        {/* <button onClick={changeColor}>CLICK</button> */}
        <div className={styles.tiles}>
          {/* {newDiemPop && <PopNewDiem setAllDiems={setAllDiems} />} */}

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
                  backgroundColor={backgroundColor}
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
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
          />
        </div>
      </main>
    </div>
  );
};

export default Diems;
