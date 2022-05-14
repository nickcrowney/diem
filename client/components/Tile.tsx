import React from 'react';
import Image from 'next/image';
import plus from '../public/images/plus.png';
import styles from './Tile.module.css';

const Tile: React.FunctionComponent = ({ allDiems, diem, setCurrentDiem }) => {
  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurrentDiem(diem);
  };

  return (
    <div className={styles.tile} onClick={divClickedHandler}>
      <h1>{diem.title}</h1>
      <h2>{diem.date}</h2>
    </div>
  );
};

export default Tile;
