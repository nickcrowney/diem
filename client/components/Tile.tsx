import React from 'react';
import Image from 'next/image';
import plus from '../public/images/plus.png';
import styles from './Tile.module.css';

const Tile: React.FunctionComponent = ({ allDiems, diem, setCurrentDiem }) => {
  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurrentDiem(diem);
  };

  function dateFixer(calendarDate) {
    const options = {
      // weekday: 'long',
      // year: 'numeric',
      day: 'numeric',
      month: 'long',
    };
    const currentDate = new Date(calendarDate).toLocaleDateString(
      'en-GB',
      options
    );
    const firstWhite = currentDate.indexOf(' ');
    const firstBit = currentDate.slice(0, firstWhite);
    const secondBit = currentDate.slice(firstWhite);
    const nth = function (d) {
      const dString = String(d);
      const last = +dString.slice(-2);
      if (last > 3 && last < 21) return 'th';
      switch (last % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };
    const finishedDate = firstBit + nth(firstBit) + secondBit;
    return finishedDate;
  }
  const date = dateFixer(diem.date);
  const event = diem.title;

  return (
    <div className={styles.tile} onClick={divClickedHandler}>

      <div className={styles.tile__info}>
        <span className={styles.diem_date_first}>{date.slice(0, 4)}</span>
        <span className={styles.diem_date_second}>{date.slice(4)}</span>
        <h1>{event}</h1>
      </div>

    </div>
  );
};

export default Tile;
