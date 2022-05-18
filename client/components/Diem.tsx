import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AddNewEvent from './AddNewEvent';
import DiemInfoBar from './DiemInfoBar';
import PopAddUsers from './PopAddUsers';
import PopRemoveUsers from './PopRemoveUsers';
import DiemColorPicker from './DiemColorPicker';
import calendar from '../public/images/calendar.png';
import chat from '../public/images/chat.png';
import GoogleMap from './GoogleMap';
import styles from './Diem.module.css';
import DisplayEvents from './DisplayEvents';
import hooks from '../services/ApiServices';
import deleteBin from '../public/deleteBin.svg';
import Popup from 'reactjs-popup';

const Diem: React.FunctionComponent = ({
  currentDiem,
  setCurrentDiem,
  users,
  backgroundColor,
  setBackgroundColor,
  allDiems,
  setAllDiems,
}) => {
  const [addRemoveUser, setAddRemoveUser] = useState(false);

  useEffect(() => {}, [currentDiem]);

  const [state, setState] = useState<ItemType[]>([]);
  useEffect(() => {
    currentDiem &&
      setBackgroundColor({
        'background-color': currentDiem && currentDiem.color,
      });
  }, [currentDiem]);

  function addToCalendar() {
    console.log(currentDiem.date, currentDiem.title);
  }
  const clickDeleteDiem = () => {
    currentDiem.events &&
      currentDiem.events.forEach((el) => {
        console.log(el.id, 'ID OF EL');
        hooks.deleteEvent(el.id);
      });
    currentDiem.id && hooks.deleteDiem(currentDiem.id);
    currentDiem.id &&
      setAllDiems(
        (prev) => (prev = prev.filter((el) => el.id !== currentDiem.id))
      );
    if (currentDiem.length) setCurrentDiem(allDiems[0]); // maybe not using
    else {
      setCurrentDiem(undefined);
    }
  };

  return (
    <div className={styles.diem} style={backgroundColor}>
      <DiemInfoBar
        currentDiem={currentDiem}
        setAddRemoveUser={setAddRemoveUser}
      />

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
          <div>
            {currentDiem && (
              <DisplayEvents
                setCurrentDiem={setCurrentDiem}
                currentDiem={currentDiem}
                state={state}
                setState={setState}
              />
            )}
          </div>
        </div>
      )}

      <GoogleMap />

      <div className={styles.diem__events}>
        <AddNewEvent
          currentDiem={currentDiem}
          setCurrentDiem={setCurrentDiem}
          state={state}
          setState={setState}
          backgroundColor={backgroundColor}
        />
        <div>
          {currentDiem && (
            <DisplayEvents
              currentDiem={currentDiem}
              setCurrentDiem={setCurrentDiem}
              state={state}
              setState={setState}
            />
          )}
        </div>

        <div className={styles.diemBottom}>
          <div className={styles.diemBottom__buttons}>
            <button type="button">
              <Image
                src={calendar}
                height="40"
                width="40"
                alt="calendar-image"
                onClick={addToCalendar}
              />
            </button>
            <button type="button">
              <Image src={chat} height="40" width="40" alt="chat-image" />
            </button>
          </div>
          <div>
            <Popup
              trigger={
                <button>
                  <Image
                    src={deleteBin}
                    height="20"
                    width="20"
                    alt="delete-bin-image"
                  />
                </button>
              }
              position="right center"
            >
              <div
                style={{
                  backgroundColor: 'whitesmoke',
                  padding: '5px',
                  borderRadius: '5px',
                  fontSize: 'large',
                }}
              >
                <button onClick={clickDeleteDiem} className={styles.deleteDiem}>
                  Delete
                </button>
              </div>
            </Popup>
          </div>
          <DiemColorPicker
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            currentDiem={currentDiem}
          />
        </div>
      </div>
    </div>
  );
};

export default Diem;
