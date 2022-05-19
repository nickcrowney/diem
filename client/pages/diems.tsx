import { useEffect, useState, useContext } from 'react';
import type { NextPage } from 'next';
import Nav from '../components/Nav';
import Tile from '../components/Tile';
import Diem from '../components/Diem';
import styles from '../styles/Home.module.css';
import dayjs from 'dayjs';
import hooks from '../services/ApiServices';
import { useLoginContext } from '../contexts/Context';
import { LoginContext } from '../contexts/Context';
import { SocketContext } from '../contexts/Socket';

const currentDate = dayjs().toISOString().slice(0, 10);

const Diems: NextPage = (props) => {
  const [onlineUsers, setOnlineUsers] = useState([]); //Grab onlineStatus emits from other users and use this to render online
  //const { loginInfo, setLoginInfo } = useLoginContext();
  const { loginInfo } = useContext(LoginContext);
  const [newDiemPop, setNewDiemPop] = useState(false);
  const [data, setData] = useState('');
  const [mainDiem, setDiem] = useState('');
  const [allDiems, setAllDiems] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const socket = useContext(SocketContext);
  const [backgroundColor, setBackgroundColor] = useState({
    'background-color': '#fabd04',
  });

  const [currentDiem, setCurrentDiem] = useState({
    id: 1,
    title: 'Add new diem',
  });
  const [trap, setTrap] = useState('');
  useEffect(() => {
    console.log('RERENDER');
  }, [trap]);

  socket.on('connect', (arg) => {
    console.log('connected to Sockets on front end');
    socket.emit('currentlyOnline', 'loginInfo.email');
    socket.emit('joiningRoom', String(currentDiem.id)); //Default user to the top chatroom
  });

  // //When we recieve current online user update, we set state of current online users
  socket.on('onlineUsers', (onlineIds) => {
    setOnlineUsers((prev) => onlineIds);
    console.log('Updated Online Users ', onlineIds);
  });

  useEffect(() => {}, [currentDiem]);
  useEffect(() => {}, [allDiems]);

  const [users, setUsers] = useState([]);

  useEffect(() => {}, [data]);
  useEffect(() => {}, [backgroundColor]);
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
        const resFuture = res.filter((el) => {
          return new Date(el.date) >= new Date(currentDate);
        });
        setAllDiems(resFuture);
        setAllEvents(
          resFuture.map((el) => {
            return el.events;
          })
        );
        console.log('RENDER ONCE DIEM');

        setCurrentDiem(resFuture[0]);
        setBackgroundColor({ 'background-color': resFuture[0].color });
      })
      .catch((error) => console.log(error));
  }, [refresh]);

  return (
    <div>
      <Nav
        loginData={loginInfo}
        users={users}
        setUsers={setUsers}
        setNewDiemPop={setNewDiemPop}
        newDiemPop={newDiemPop}
        allDiems={allDiems}
        setAllDiems={setAllDiems}
      />

      <main className={styles.container}>
        <div className={styles.tiles}>
          {allDiems &&
            allDiems.map((el) => {
              return (
                el && (
                  <div key={el.id}>
                    <Tile
                      setDiem={setDiem}
                      mainDiem={mainDiem}
                      allDiems={allDiems}
                      setAllDiems={setAllDiems}
                      diem={el}
                      setCurrentDiem={setCurrentDiem}
                      backgroundColor={backgroundColor}
                      setTrap={setTrap}
                    />
                  </div>
                )
              );
            })}
        </div>

        <div className={styles.diem}>
          {currentDiem && (
            <Diem
              mainDiem={mainDiem}
              currentDiem={currentDiem}
              setTrap={setTrap}
              setCurrentDiem={setCurrentDiem}
              users={users}
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
              allDiems={allDiems}
              setAllDiems={setAllDiems}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Diems;
