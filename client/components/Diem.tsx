import React, { useEffect } from 'react';
import Image from 'next/image';

import styles from './Diem.module.css';
import DiemInfoBar from './DiemInfoBar';
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
  useEffect(() => {}, [currentDiem]);

  const pics = [mypic, mypic2, mypic3];
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
  // const date = currentDiem && currentDiem.date;
  const event = currentDiem && currentDiem.title;


  return (
    <>
      <div className={styles.diem}>
        <DiemInfoBar currentDiem={currentDiem} />
        {/* <h1 contenteditable="true"> I am editable by the user </h1> */}
        {/* <div className={styles.diem__infobar}>
          <div className={styles.tile__info}>
            <h1>{event}</h1>
            <span className={styles.diem_date_first}>{date.slice(0, 4)}</span>
            <span className={styles.diem_date_second}>{date.slice(4)}</span>
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
              {currentDiem &&
                currentDiem.users &&
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
        </div> */}
        <div>
          <PopRemoveUsers
            users={users}
            currentDiem={currentDiem}
            setCurrentDiem={setCurrentDiem}
          />
        </div>
        <div>
          {currentDiem &&
            currentDiem.users &&
            currentDiem.users.map((el) => {
              return <div>{el.name}</div>;
            })}
        </div>
        <div className={styles.diem__events}>
          <AddNewEvent currentDiem={currentDiem} />

          <div>
            {currentDiem &&
              currentDiem.events &&
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
