import type { NextPage } from 'next';
import Nav from '../components/Nav';
import Tile from '../components/Tile';
import Diem from '../components/Diem';
import PopNewDiem from '../components/PopNewDiem';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import hooks from '../services/ApiServices';
import { async } from '@firebase/util';
import { useLoginContext } from '../contexts/Context';
import io from 'socket.io-client';

const currentDate = dayjs().toISOString().slice(0, 10); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
console.log(currentDate, 'CURRENT DATE');

const Diems: NextPage = (props) => {
  const socket = io('http://localhost:4000');
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]); //Grab onlineStatus emits from other users and use this to render online
  const { loginInfo, setLoginInfo } = useLoginContext();
  const [newDiemPop, setNewDiemPop] = useState(false);
  const [data, setData] = useState('');
  const [mainDiem, setDiem] = useState('');
  const [allDiems, setAllDiems] = useState([]);

  const [backgroundColor, setBackgroundColor] = useState('#fabd04');

  console.log(loginInfo, 'LOGIN INFO');

  //IF a user's socket id belongs to a user whose email state exists in context, emit to other users that that user is online
  let socId = '00000000';
  const [history, setHistory] = useState();
  const [currentDiem, setCurrentDiem] = useState({
    id: 1,
    title: 'Add New Diem',
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
          return new Date(el.date) > new Date(currentDate);
        });
        setAllDiems(resFuture);
        setCurrentDiem(resFuture[0]);
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
          />
        </div>
      </main>
    </div>
  );
};

export default Diems;
