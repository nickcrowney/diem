import { useEffect } from 'react';
import Image from 'next/image';
<<<<<<< HEAD
import chat from '../public/images/chat.png';
import calendar from '../public/images/calendar.png';
import more from '../public/images/more.png';
import styles from './DiemInfoBar.module.css';

const DiemInfoBar: React.FunctionComponent = (
  mainDiem,
  currentDiem,
  setCurrentDiem,
  users
) => {
  useEffect(() => {}, [currentDiem]);
  const date = currentDiem.date;
  const event = currentDiem.title;
  return (
    <>
      <div className={styles.diem__infobar}>
        <div className={styles.tile__info}>
          <h1>{event}</h1>
          <h2>{date}</h2>
        </div>
        <Image src={chat} height="35" width="45" />
        <Image src={calendar} height="20" width="40" />
      </div>

      <div className={styles.diem__users}>
        <button type="button">
          <Image src={more} height="40" width="40" />
        </button>
        <div className={styles.diem__profilePics_container}>
          {currentDiem.users &&
            currentDiem.users.map((el) => {
              return (
                <div
                  key={el.id}
                  className={styles.diem__profilePic}
                  // onMouseEnter={showText()}
                  // onMouseLeave={hideText()}
                >
=======
import calendar from '../public/images/calendar.png';
import chat from '../public/images/chat.png';
import prosAndCons from '../public/images/pros-and-cons.png';
import plus from '../public/images/plus.png';
import styles from './DiemInfoBar.module.css';

const DiemInfoBar: React.FunctionComponent = ({ currentDiem }) => {
  useEffect(() => {}, [currentDiem]);

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
  const date = dateFixer(currentDiem && currentDiem.date);
  return (
    <div className={styles.diemInfoBar}>
      <div>
        <h1>{currentDiem.title}</h1>
        <h2>{date}</h2>
      </div>
      <div className={styles.diemInfoBar__picsAndButtons}>
        <div className={styles.diemInfoBar__profilePics_container}>
          <div className={styles.diemInfoBar__profilePic_plusSign}>
            <Image src={plus} alt="Picture of the author" />
          </div>
          {currentDiem.users &&
            currentDiem.users.map((el) => {
              return (
                <div key={el.id} className={styles.diemInfoBar__profilePic}>
>>>>>>> 41acc10c4db2479a52073540afecf1af7abc12e1
                  <Image
                    src={el.userPhoto}
                    height="50"
                    width="50"
                    alt="Picture of the author"
                  />
                </div>
              );
            })}
        </div>
<<<<<<< HEAD
      </div>
    </>
=======
        <div className={styles.diemInfoBar__buttons}>
          <button type="button">
            <Image src={calendar} height="40" width="40" />
          </button>
          <button type="button">
            <Image src={chat} height="40" width="40" />
          </button>
          <button type="button">
            <Image src={prosAndCons} height="40" width="40" />
          </button>
        </div>
      </div>
    </div>
>>>>>>> 41acc10c4db2479a52073540afecf1af7abc12e1
  );
};

export default DiemInfoBar;
