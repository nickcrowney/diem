import React from 'react';
import Image from 'next/image';
// replace images with data from db
import mypic from '../public/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg';
import mypic2 from '../public/images/art-hauntington-jzY0KRJopEI-unsplash.jpg';
import mypic3 from '../public/images/christian-buehner-6YQmQgcQ0VA-unsplash.jpg';
//
import styles from './Diem.module.css';

const Diem: React.FunctionComponent = () => {
  return (
    <div className={styles.diem}>
      <div className={styles.diem__infobar}>
        <div className={styles.diem__buttons_container}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            +
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            -
          </button>
        </div>
        <div className={styles.diem__profilePics_container}>
          <div className={styles.diem__profilePic}>
            <Image src={mypic} alt="Picture of the author" />
          </div>
          <div className={styles.diem__profilePic}>
            <Image src={mypic2} alt="Picture of the author" />
          </div>
          <div className={styles.diem__profilePic}>
            <Image src={mypic3} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diem;
