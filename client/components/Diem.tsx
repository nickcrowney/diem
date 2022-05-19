import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AddNewEvent from './AddNewEvent';
import DiemInfoBar from './DiemInfoBar';
import PopAddUsers from './PopAddUsers';
import PopRemoveUsers from './PopRemoveUsers';
import DiemColorPicker from './DiemColorPicker';
import calendar from '../public/images/calendar.png';
import chat from '../public/images/chat.png';
import world from '../public/images/world.png';
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
  refresh,
  setRefresh,
}) => {
  const [addRemoveUser, setAddRemoveUser] = useState(false);
  const [addMap, setMap] = useState(false);
  const [showMapSearch, setShowMapSearch] = useState(false);
  const [mapPin, setMapPin] = useState('');
  const [displayMap, setDisplayMap] = useState(false);

  //====== add diem to Google calendar
  function addToCalendar() {
    console.log(currentDiem.date, currentDiem.title);
    hooks.postCalendar(currentDiem.date, currentDiem.title);
  }
  //====== reveal map search box
  function showMapSearchBox() {
    setShowMapSearch((prev) => {
      return !prev;
    });
  }
  //====== search and display map
  const queryMap = (e) => {
    e.preventDefault();
    setMapPin(e.target.query.value);
    currentDiem.id && hooks.modifyDiemMap(currentDiem.id, e.target.query.value);
    setAllDiems((diems) => {
      const copy = diems;
      const mapped = copy.map((diem) => {
        diem.id === currentDiem.id ? (diem.map = e.target.query.value) : diem;
        return diem;
      });
      return mapped;
    });

    setDisplayMap((prev) => {
      return !prev;
    });
    setShowMapSearch((prev) => {
      return !prev;
    });
  };

  useEffect(() => {}, [currentDiem]);

  const [state, setState] = useState<ItemType[]>([]);

  useEffect(() => {
    currentDiem &&
      setBackgroundColor({
        'background-color': currentDiem && currentDiem.color,
      });
    if (currentDiem.map) setDisplayMap(true);
    if (!currentDiem.map) setDisplayMap(false);

    currentDiem.map && setMapPin(currentDiem.map);
  }, [currentDiem, mapPin]);

  function addMapFunction() {
    setMap((prev) => {
      return !prev;
    });
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
        setCurrentDiem={setCurrentDiem}
        setAddRemoveUser={setAddRemoveUser}
        setAllDiems={setAllDiems}
        refresh={refresh}
        setRefresh={setRefresh}
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
          {/* <div>
            {currentDiem && (
              <DisplayEvents
                setCurrentDiem={setCurrentDiem}
                currentDiem={currentDiem}
                state={state}
                setState={setState}
              />
            )}
          </div> */}
        </div>
      )}

      {displayMap && (
        <GoogleMap currentDiem={currentDiem} setAllDiems={setAllDiems} />
      )}
      {displayMap && (
        <button
          onClick={() => {
            setDisplayMap(false);
          }}
        >
          <Image src={deleteBin} width={20} height={20} />
        </button>
      )}

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
              setAllDiems={setAllDiems}
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
            <button type="button">
              <Image
                src={world}
                height="40"
                width="40"
                alt="chat-image"
                onClick={showMapSearchBox}
              />
            </button>
            {showMapSearch && (
              <form onSubmit={queryMap}>
                <input
                  type="text"
                  name="query"
                  id="query"
                  placeholder="Find location..."
                  className="py-2 px-4 rounded border-none mr-4"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  GO!
                </button>
              </form>
            )}
          </div>
          {/* <div>
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
          </div> */}
          <DiemColorPicker
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            currentDiem={currentDiem}
            setAllDiems={setAllDiems}
          />
        </div>
      </div>
    </div>
  );
};

export default Diem;
