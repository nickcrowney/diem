import React, { useEffect } from 'react';
import DiemInfoBar from './DiemInfoBar';
import AddNewEvent from './AddNewEvent';
import PopAddUsers from './PopAddUsers';
import PopRemoveUsers from './PopRemoveUsers';
import DiemColorPicker from './DiemColorPicker';
import AddNewEventTest from './AddNewEventTest';
import styles from './Diem.module.css';

const Diem: React.FunctionComponent = ({
  mainDiem,
  currentDiem,
  setCurrentDiem,
  users,
}) => {
  useEffect(() => {}, [currentDiem]);

  return (
    <>
      <div className={styles.diem}>
        <DiemInfoBar currentDiem={currentDiem} />
        <div className={styles.addRemoveUsers}>
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
