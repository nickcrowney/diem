import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AddNewEvent from './AddNewEvent';
import DiemInfoBar from './DiemInfoBar';
import PopAddUsers from './PopAddUsers';
import PopRemoveUsers from './PopRemoveUsers';
import DiemColorPicker from './DiemColorPicker';
import DisplayEvents from './DisplayEvents';
import ChatServer from './ChatServer';
import GoogleMap from './GoogleMap';
import styles from './Diem.module.css';
import hooks from '../services/ApiServices';
import calendar from '../public/images/calendar.png';
import chat from '../public/images/chat.png';
import deleteBin from '../public/deleteBin.svg';
import world from '../public/images/world.png';

const Diem: React.FunctionComponent = ({
  onlineUsers,
  currentDiem,
  setCurrentDiem,
  users,
  backgroundColor,
  setBackgroundColor,
  allDiems,
  setAllDiems,
  refresh,
  setRefresh,
  loginInfo,
}) => {
  const [addRemoveUser, setAddRemoveUser] = useState(false);
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
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    currentDiem &&
      setBackgroundColor({
        'background-color': currentDiem && currentDiem.color,
      });
    if (currentDiem.map) setDisplayMap(true);
    if (!currentDiem.map) setDisplayMap(false);

    currentDiem.map && setMapPin(currentDiem.map);
  }, [currentDiem, mapPin]);

  return (
    <div className={styles.diem} style={backgroundColor}>
      <DiemInfoBar
        onlineUsers={onlineUsers}
        currentDiem={currentDiem}
        setCurrentDiem={setCurrentDiem}
        setAddRemoveUser={setAddRemoveUser}
        allDiems={allDiems}
        setAllDiems={setAllDiems}
        refresh={refresh}
        loginInfo={loginInfo}
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
        </div>
      )}
      <div className={styles.map}>
        <div>
          {displayMap && (
            <GoogleMap currentDiem={currentDiem} setAllDiems={setAllDiems} />
          )}
        </div>
        <div className={styles.map_delete}>
          {displayMap && (
            <button
              onClick={() => {
                setDisplayMap(false);
              }}
            >
              <Image src={deleteBin} width={25} height={25} />
            </button>
          )}
        </div>
      </div>

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
            <button
              type="button"
              onClick={() => {
                setShowChat((prev) => !prev);
              }}
            >
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

          <DiemColorPicker
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            currentDiem={currentDiem}
            setAllDiems={setAllDiems}
          />
        </div>
      </div>

      {showChat && (
        <div>
          <ChatServer currentDiem={currentDiem} />
        </div>
      )}
    </div>
  );
};

export default Diem;
