import { useEffect } from 'react';
import Image from 'next/image';
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
      </div>
    </>
  );
};

export default DiemInfoBar;
