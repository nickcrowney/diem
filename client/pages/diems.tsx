import type { NextPage } from 'next';
import { useState } from 'react';
import Tile from '../components/Tile';
import Diem from '../components/Diem';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';

const Diems: NextPage = () => {
  const [mainDiem, setDiem] = useState(['ajjj']);

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
