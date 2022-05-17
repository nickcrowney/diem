<<<<<<< HEAD
import React, { FC, useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styles from "../styles/Home.module.css";
import hooks from "../services/ApiServices";
import deleteBin from "../public/deleteBin.svg";
import Image from "next/image";
=======
import React, { useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import styles from '../styles/Home.module.css';
import hooks from '../services/ApiServices';
import deleteBin from '../public/deleteBin.svg';
import Image from 'next/image';
>>>>>>> 032076549a3c5fe5ae9e81a54739e281709916db

interface ItemType {
  id: number;
  name: string;
}
function DisplayEvents({ currentDiem, state, setState }) {
<<<<<<< HEAD
  console.log(currentDiem.events, "EVENTSSSS");
  // const [state, setState] = useState<ItemType[]>([]);

  useEffect(() => {
    console.log(currentDiem.events, "MAPPABLE");
=======
  useEffect(() => {
>>>>>>> 032076549a3c5fe5ae9e81a54739e281709916db
    currentDiem.events && setState(currentDiem.events);
  }, [currentDiem.events]);
  useEffect(() => {}, [currentDiem]);

  const clickedEvent = (item) => {
    console.log("clicked event");
    console.log(item.title, "title event");
    console.log(item.id, "event ID");
  };
  const removeEvent = (id) => {
    console.log("remove event");
    // hooks.deleteEvent(id);
  };
  return (
    <>
      {currentDiem.events && state.length ? (
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
