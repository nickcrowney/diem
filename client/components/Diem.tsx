import React, { useEffect } from "react";
import DiemInfoBar from "./DiemInfoBar";
import AddNewEvent from "./AddNewEvent";
import PopAddUsers from "./PopAddUsers";
import PopRemoveUsers from "./PopRemoveUsers";
import DiemColorPicker from "./DiemColorPicker";
import AddNewEventTest from "./AddNewEventTest";
import styles from "./Diem.module.css";

<<<<<<< HEAD
import more from '../public/images/more.png';

import styles from './Diem.module.css';
import DiemInfoBar from './DiemInfoBar';
import AddNewEvent from './AddNewEvent';
import PopAddUsers from './PopAddUsers';
import AddNewEventTest from './AddNewEventTest';
import PopRemoveUsers from './PopRemoveUsers';

=======
>>>>>>> 41acc10c4db2479a52073540afecf1af7abc12e1
const Diem: React.FunctionComponent = ({
  mainDiem,
  currentDiem,
  setCurrentDiem,
  users,
}) => {
  useEffect(() => {}, [currentDiem]);
<<<<<<< HEAD
  const date = currentDiem.date;
  const event = currentDiem.title;
=======
  const event = currentDiem && currentDiem.title;
>>>>>>> 41acc10c4db2479a52073540afecf1af7abc12e1

  return (
    <>
      <div className={styles.diem}>
<<<<<<< HEAD
        <DiemInfoBar
          mainDiem={mainDiem}
          currentDiem={currentDiem}
          setCurrentDiem={setCurrentDiem}
          users={users}
        />
        {/* <div className={styles.diem__infobar}>
          <div className={styles.tile__info}>
            <h1>{event}</h1>
            <h2>{date}</h2>
          </div>
          <Image src={chat} height="35" width="45" />
          <Image src={calendar} height="20" width="40" />
        </div> */}
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
=======
        <DiemInfoBar currentDiem={currentDiem} />

        <div className={styles.addRemoveUsers}>
>>>>>>> 41acc10c4db2479a52073540afecf1af7abc12e1
          <PopAddUsers
            users={users}
            currentDiem={currentDiem}
            setCurrentDiem={setCurrentDiem}
          />
          <PopRemoveUsers
            users={users}
            currentDiem={currentDiem}
            setCurrentDiem={setCurrentDiem}
          />
        </div>
        <DiemColorPicker />
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
                      {el.location ? " at " : ""}{" "}
                      {el.location ? el.location + ". " : ""}
                      {el.time ? `Start time: ${el.time}` : ""}
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
