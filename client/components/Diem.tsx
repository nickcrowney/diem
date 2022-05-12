import React from 'react';
import Image from 'next/image';
// replace images with data from db
import mypic from '../public/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg';
import mypic2 from '../public/images/art-hauntington-jzY0KRJopEI-unsplash.jpg';
import mypic3 from '../public/images/christian-buehner-6YQmQgcQ0VA-unsplash.jpg';
//
import styles from './Diem.module.css';
import AddNewEvent from './AddNewEvent';

const Diem: React.FunctionComponent = ({ mainDiem, currentDiem }) => {
  const pics = [mypic, mypic2, mypic3];
  const date = currentDiem.date;
  const event = currentDiem.title;
  return (
    <div className={styles.diem}>
      <div className={styles.diem__infobar}>
        <div className={styles.tile__info}>
          <h1>{event}</h1>
          <h2>{date}</h2>
        </div>
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
      <div className={styles.diem__events}>
        <AddNewEvent currentDiem={currentDiem} />
        <div>
          {currentDiem.events &&
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
            })}
        </div>
      </div>
    </div>
  );
};

export default Diem;
