import React from "react";
import Image from "next/image";
import mypic from "../public/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg";
import mypic2 from "../public/images/art-hauntington-jzY0KRJopEI-unsplash.jpg";
import mypic3 from "../public/images/christian-buehner-6YQmQgcQ0VA-unsplash.jpg";
import plus from "../public/images/plus.png";
import styles from "./Tile.module.css";
import { shuffle } from "lodash";
import { Socket } from "socket.io-client";
import { useEffect, useState, useContext, useCallback } from "react";
import io from "socket.io-client";
import { SocketContext } from "../contexts/Socket";

const Tile: React.FunctionComponent = ({ allDiems, diem, setCurrentDiem }) => {
  const socket = useContext(SocketContext);

  const newFunc = useCallback(() => {
    socket.emit("currentlyOnline", "borisjohnson@gmail.com");
  }, []);

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurrentDiem(diem);
    console.log("CLICK EVENT FOR DIEM CHANGE");
    socket.emit("leavingRoom");
    socket.emit("joiningRoom", String(diem.id));
  };

  const pics = [mypic, mypic2, mypic2, mypic3, mypic3];
  const date = diem.date;
  const event = diem.title;

  return (
    <div className={styles.tile} onClick={divClickedHandler}>
      <div className={styles.tile__profilePics_container}>
        <div className={styles.tile__profilePic_plusSign}>
          <Image src={plus} alt="Picture of the author" />
        </div>

        {shuffle(
          diem.users
            .map((el) => {
              return (
                <div key={el.id} className={styles.tile__profilePic}>
                  <Image
                    src={el.userPhoto}
                    height="50"
                    width="50"
                    alt="Picture of the author"
                  />
                </div>
              );
            })
            .slice(0, 5)
        )}
      </div>

      <div className={styles.tile__info}>
        <h1>{event}</h1>
        <h2>{date}</h2>
      </div>
    </div>
  );
};

export default Tile;
