import React from 'react';
import Image from 'next/image';
// replace images with data from db
import mypic from '../public/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg';
import mypic2 from '../public/images/art-hauntington-jzY0KRJopEI-unsplash.jpg';
import mypic3 from '../public/images/christian-buehner-6YQmQgcQ0VA-unsplash.jpg';
import chat from '../public/images/chat.png';
import calendar from '../public/images/calendar.png';
//
import styles from './Diem.module.css';

const Diem: React.FunctionComponent = ({ mainDiem, currentDiem }) => {
  const pics = [mypic, mypic2, mypic3];
  const date = currentDiem.date;
  const event = currentDiem.title;
  return (
    <div className={styles.diem}>
      <div className={styles.diem__infobar}>
        {/* <div className={styles.tile__info}>
          <h1>{event}</h1>
          <h2>{date}</h2>
        </div> */}
        <Image src={chat} height="35" width="45" />
        <Image src={calendar} height="20" width="40" />
        <div className={styles.diem__profilePics_container}>
          {pics.map((pic) => {
            return (
              <div className={styles.diem__profilePic}>
                <Image src={pic} alt="Picture of the author" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Diem;
