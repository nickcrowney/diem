import React, { useEffect, useState } from 'react';
import DiemInfoBar from './DiemInfoBar';
import AddNewEvent from './AddNewEvent';
import PopAddUsers from './PopAddUsers';
import PopRemoveUsers from './PopRemoveUsers';
import DiemColorPicker from './DiemColorPicker';
import GoogleMap from './GoogleMap';
import AddNewEventTest from './AddNewEventTest';
import styles from './Diem.module.css';
import DisplayEvents from './DisplayEvents';
import more from '../public/images/more.png';

const Diem: React.FunctionComponent = ({
  mainDiem,
  currentDiem,
  setCurrentDiem,
  users,
  backgroundColor,
  setBackgroundColor,
}) => {
  const [addRemoveUser, setAddRemoveUser] = useState(false);
  useEffect(() => {}, [currentDiem]);
  // const date = currentDiem.date;
  // const event = currentDiem && currentDiem.title;

  const [state, setState] = useState<ItemType[]>([]);
  useEffect(() => {
    currentDiem &&
      setBackgroundColor({
        'background-color': currentDiem && currentDiem.color,
      });
  }, [currentDiem]);

  return (
    <>
      <div className={styles.diem} style={backgroundColor}>
        <DiemInfoBar
          currentDiem={currentDiem}
          setAddRemoveUser={setAddRemoveUser}
        />
        {/* <button onClick={changeColor}>CLICK</button> */}

        {addRemoveUser && (
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
        )}

        <GoogleMap />

        <div className={styles.diem__events}>
          <AddNewEvent
            currentDiem={currentDiem}
            setCurrentDiem={setCurrentDiem}
            state={state}
            setState={setState}
          />
          <div>
            {currentDiem && (
              <DisplayEvents
                currentDiem={currentDiem}
                state={state}
                setState={setState}
              />
            )}

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
        <DiemColorPicker
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
      </div>
    </>
  );
};

export default Diem;
