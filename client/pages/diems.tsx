import type { NextPage } from 'next';
import { useState } from 'react';
import Tile from '../components/Tile';
import Diem from '../components/Diem';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import Popup from 'reactjs-popup';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const Diems: NextPage = () => {
<<<<<<< HEAD
  const [mainDiem, setDiem] = useState(['ajjj']);
=======


  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
   const [mainDiem, setDiem] = useState('');
  useEffect(() => {}, [setData]);
  const currentDate = dayjs().toISOString(); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');


>>>>>>> c4988e3b8e17bfceb7b8e71fc78daf9c50ed043e
  return (
    <div>
      <Nav />
      <main className={styles.container}>
        <div>
          <Popup
            className={styles.plusdiem}
            trigger={<button> ➕ </button>}
            position="right top"
          >
            <div className={styles.newdiem}>
              <div>{data}</div>

              <form
                onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
                className={styles.input}
              >
                <input {...register('diem-name')} placeholder="Diem Name..." />
                <input
                  type="date"
                  min={currentDate}
                  name="date"
                  {...register('date', { required: true })}
                ></input>
                <input type="submit" />
              </form>

              {/* <button>Click here</button> */}
            </div>
          </Popup>
        </div>
        <div className={styles.tiles}>
          <Tile setDiem={setDiem} mainDiem={mainDiem} />
          <Tile setDiem={setDiem} mainDiem={mainDiem} />
          <Tile setDiem={setDiem} mainDiem={mainDiem} />
          <Tile setDiem={setDiem} mainDiem={mainDiem} />
        </div>
        <div className={styles.diem}>
          <Diem mainDiem={mainDiem} />
        </div>
      </main>
    </div>
  );
};

export default Diems;
