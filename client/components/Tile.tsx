import React, { useContext } from 'react';
import { SocketContext } from '../contexts/Socket';
import styles from './Tile.module.css';

const Tile: React.FunctionComponent = ({
  allDiems,
  diem,
  setCurrentDiem,
  setAllDiems,
}) => {
  const socket = useContext(SocketContext);

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurrentDiem(diem);
    socket.emit('leavingRoom');
    socket.emit('joiningRoom', String(diem.id));
  };

  function dateFixer(calendarDate) {
    const options = {
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
    <>
      <div
        className={styles.tile}
        style={{ 'background-color': diem.color }}
        onClick={divClickedHandler}
      >
        <div>
          <div className={styles.tile__info}>
            <span className={styles.diem_date_first}>{date.slice(0, 4)}</span>
            <span className={styles.diem_date_second}>{date.slice(4)}</span>
            <h1>{event}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tile;
