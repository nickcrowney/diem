import React, { useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import styles from "../styles/Home.module.css";
import hooks from "../services/ApiServices";
import deleteBin from "../public/deleteBin.svg";
import Image from "next/image";

interface ItemType {
  id: number;
  name: string;
}
function DisplayEvents({ currentDiem, state, setState }) {
  useEffect(() => {
    setState(currentDiem.events);
  }, [currentDiem]);
  useEffect(() => {}, [state]);


  const clickedEvent = (item) => {};
  const removeEvent = (id) => {
    console.log('remove event');

  };
  return (
    <>
      {state && currentDiem.events ? (
        <ReactSortable list={state} setList={setState}>
          {state.map((item) => (
            <>
              <div className={styles.events}>
                <div key={item.id} onClick={() => clickedEvent(item)}>
                  {item.title}
                  {""}
                </div>
                <div onClick={() => removeEvent(item.id)}>
                  <Image src={deleteBin} height="20" width="20" />
                </div>
              </div>
            </>
          ))}
        </ReactSortable>
      ) : (
        "Currently no events"
      )}
    </>
  );
}

export default DisplayEvents;
