import React, { useEffect } from 'react';
import Image from 'next/image';

// replace images with data from db

import mypic from '../public/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg';
import mypic2 from '../public/images/art-hauntington-jzY0KRJopEI-unsplash.jpg';
import mypic3 from '../public/images/christian-buehner-6YQmQgcQ0VA-unsplash.jpg';
import chat from '../public/images/chat.png';
import calendar from '../public/images/calendar.png';
import more from '../public/images/more.png';

import styles from './Diem.module.css';
import AddNewEvent from './AddNewEvent';
import PopAddUsers from './PopAddUsers';
import AddNewEventTest from './AddNewEventTest';
import PopRemoveUsers from './PopRemoveUsers';
const Diem: React.FunctionComponent = ({
  mainDiem,
  currentDiem,
  setCurrentDiem,
  users,
}) => {
  useEffect(() => {
    console.log(currentDiem, 'CURR DEEZ NUTZ');
  }, [currentDiem]);
  const pics = [mypic, mypic2, mypic3];
  const date = currentDiem.date;
  const event = currentDiem.title;
  console.log(currentDiem.users, 'CURRENT USERS');

  return (
    <>
      <div className={styles.diem}>
        <div className={styles.diem__infobar}>
          <div className={styles.tile__info}>
            <h1>{event}</h1>
            <h2>{date}</h2>
          </div>
          <Image src={chat} height="35" width="45" />
          <Image src={calendar} height="20" width="40" />
        </div>
        <div>
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
          <PopAddUsers
            users={users}
            currentDiem={currentDiem}
            setCurrentDiem={setCurrentDiem}
          />
        </div>
        <div>
          <PopRemoveUsers
            users={users}
            currentDiem={currentDiem}
            setCurrentDiem={setCurrentDiem}
          />
        </div>
        <div>
          {currentDiem.users &&
            currentDiem.users.map((el) => {
              return <div>{el.name}</div>;
            })}
        </div>
        <div className={styles.diem__events}>
          <AddNewEvent currentDiem={currentDiem} />
          <div>
            {currentDiem.events &&
              currentDiem.events.map((el) => {
                return (
                  <ul key={el.id}>
                    <div>
                      {el.title}
                      {el.location ? ' at ' : ''}{' '}
                      {el.location ? el.location + '. ' : ''}
                      {el.time ? `Start time: ${el.time}` : ''}
                    </div>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Diem;
