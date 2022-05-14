import React from 'react';
import Image from 'next/image';
import mypic from '../public/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg';
import mypic2 from '../public/images/art-hauntington-jzY0KRJopEI-unsplash.jpg';
import mypic3 from '../public/images/christian-buehner-6YQmQgcQ0VA-unsplash.jpg';
import plus from '../public/images/plus.png';
import styles from './Tile.module.css';
import { shuffle } from 'lodash';

const Tile: React.FunctionComponent = ({ allDiems, diem, setCurrentDiem }) => {
  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurrentDiem(diem);
  };

  const pics = [mypic, mypic2, mypic2, mypic3, mypic3];
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
      {/* <div className={styles.tile__profilePics_container}>
        <div className={styles.tile__profilePic_plusSign}>
          <Image src={plus} alt="Picture of the author" />
        </div>

        {shuffle(
          diem.users
            .map((el) => {
              return (
                <div key={el.id} className={styles.tile__profilePic}>
                  <Image
                    src={el.userPhoto}
                    height="50"
                    width="50"
                    alt="Picture of the author"
                  />
                </div>
              );
            })
            .slice(0, 5)
        )}
      </div> */}

      <div className={styles.tile__info}>
        <span className={styles.diem_date_first}>{date.slice(0, 4)}</span>
        <span className={styles.diem_date_second}>{date.slice(4)}</span>
        <h1>{event}</h1>
      </div>
    </div>
  );
};

export default Tile;
