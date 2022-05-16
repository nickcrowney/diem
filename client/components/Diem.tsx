import React, { useEffect } from 'react';
import DiemInfoBar from './DiemInfoBar';
import AddNewEvent from './AddNewEvent';
import PopAddUsers from './PopAddUsers';
import PopRemoveUsers from './PopRemoveUsers';
import DiemColorPicker from './DiemColorPicker';
import GoogleMap from './GoogleMap';
import AddNewEventTest from './AddNewEventTest';
import styles from './Diem.module.css';
import DisplayEvents from './DisplayEvents';

const Diem: React.FunctionComponent = ({
  mainDiem,
  currentDiem,
  setCurrentDiem,
  users,
  backgroundColor,
  setBackgroundColor,
}) => {
  useEffect(() => {}, [currentDiem]);
  // const event = currentDiem && currentDiem.title;
  const changeColor = () => {
    setBackgroundColor({ 'background-color': 'black' });
  };
  return (
    <>
      <div className={styles.diem} style={backgroundColor}>
        <DiemInfoBar currentDiem={currentDiem} />
        <button onClick={changeColor}>CLICK</button>

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
        <DiemColorPicker
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
        <GoogleMap />

        <div>
          {currentDiem &&
            currentDiem.users &&
            currentDiem.users.map((el) => {
              return <div>{el.name}</div>;
            })}
        </div>

        <div className={styles.diem__events}>
          <AddNewEvent
            currentDiem={currentDiem}
            setCurrentDiem={setCurrentDiem}
          />

          <div>
            {currentDiem && <DisplayEvents currentDiem={currentDiem} />}

            {/* {currentDiem &&
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
              })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Diem;
