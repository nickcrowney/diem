import { useEffect } from 'react';
import Image from 'next/image';
import chat from '../public/images/chat.png';
import calendar from '../public/images/calendar.png';
import more from '../public/images/more.png';
import styles from './DiemInfoBar.module.css';

const DiemInfoBar: React.FunctionComponent = ({ currentDiem }) => {
  useEffect(() => {}, [currentDiem]);

  return (
    <div className={styles.diemInfoBar}>
      <div>
        <h1>{currentDiem.title}</h1>
        <h2>{currentDiem.date}</h2>
      </div>
      <div className={styles.diemInfoBar__picsAndButtons}>
        <div className={styles.diemInfoBar__profilePics_container}>
          {currentDiem.users &&
            currentDiem.users.map((el) => {
              return (
                <div
                  key={el.id}
                  className={styles.diemInfoBar__profilePic}
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
        <div className={styles.diemInfoBar__buttons}>
          <button type="button">
            <Image src={calendar} height="40" width="40" />
          </button>
          <button type="button">
            <Image src={chat} height="40" width="40" />
          </button>
          <button type="button">
            <Image src={more} height="40" width="40" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiemInfoBar;
