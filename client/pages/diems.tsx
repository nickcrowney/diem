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

const Diems: NextPage = () => {
  const [newDiemPop, setNewDiemPop] = useState(false);
  const [data, setData] = useState('');
  const [mainDiem, setDiem] = useState('');
  const [allDiems, setAllDiems] = useState([]);
  const [currentDiem, setCurrentDiem] = useState({
    title: 'Select Diem',
  });
  useEffect(() => {
    console.log(currentDiem, 'CURR DEEZ NUTZ');
  }, [currentDiem]);
  const [users, setUsers] = useState([]);
  console.log(currentDiem, 'RENDER DAMNIT');
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
  console.log(hooks.getDiems(), 'AWAITED DIEMS');
  // const currentDate = dayjs().toISOString(); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
  return (
    <div>
      <Nav users={users} setUsers={setUsers} toggleNewDiemPop={setNewDiemPop} />
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
