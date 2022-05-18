import React, { useEffect, useState } from "react";
import DiemInfoBar from "./DiemInfoBar";
import AddNewEvent from "./AddNewEvent";
import PopAddUsers from "./PopAddUsers";
import PopRemoveUsers from "./PopRemoveUsers";
import DiemColorPicker from "./DiemColorPicker";
import GoogleMap from "./GoogleMap";
import styles from "./Diem.module.css";
import DisplayEvents from "./DisplayEvents";
import ChatServer from "./ChatServer";

const Diem: React.FunctionComponent = ({
  currentDiem,
  setCurrentDiem,
  users,
  backgroundColor,
  setBackgroundColor,
}) => {
  const [addRemoveUser, setAddRemoveUser] = useState(false);
  useEffect(() => {}, [currentDiem]);

  const [state, setState] = useState<ItemType[]>([]);
  useEffect(() => {
    currentDiem &&
      setBackgroundColor({
        "background-color": currentDiem && currentDiem.color,
      });
  }, [currentDiem]);
  return (
    <>
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
          </div>
        )}

        <GoogleMap />

        <div className={styles.diem__events}>
          <AddNewEvent currentDiem={currentDiem} setState={setState} />
          <div>
            {currentDiem && (
              <DisplayEvents
                currentDiem={currentDiem}
                state={state}
                setState={setState}
              />
            )}
          </div>
        </div>
        <DiemColorPicker
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          currentDiem={currentDiem}
        />
      </div>
      {/* <div>
        <ChatServer currentDiem={currentDiem} /> //TESTING HERE
      </div> */}
    </>
  );
};

export default Diem;
