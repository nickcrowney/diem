import type { NextPage } from 'next';
import Head from 'next/head';
import Tile from '../components/Tile';
import Diem from '../components/Diem';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import props from '../services/ApiServices';
const Diems: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  const [mainDiem, setDiem] = useState('');
  useEffect(() => {}, [setData]);
  const currentDate = dayjs().toISOString(); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');

  const currentUser = 1;
  return (
    <div>
      <Nav />
      <main className={styles.container}>
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
