import React from 'react';
import Image from 'next/image';
// replace images with data from db
import mypic from '../public/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg';
import mypic2 from '../public/images/art-hauntington-jzY0KRJopEI-unsplash.jpg';
import mypic3 from '../public/images/christian-buehner-6YQmQgcQ0VA-unsplash.jpg';
//
import styles from './Tile.module.css';

const Tile: React.FunctionComponent = () => {
  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;
    console.log(
      'Element name: ',
      div.tagName,
      'Width: ',
      div.clientWidth,
      'Height: ',
      div.clientHeight
    );
  };

  return (
    <div className={styles.tile} onClick={divClickedHandler}>
      <div className={styles.tile__profilePics_container}>
        <div className={styles.tile__profilePic}>
          <Image src={mypic} alt="Picture of the author" />
        </div>
        <div className={styles.tile__profilePic}>
          <Image src={mypic2} alt="Picture of the author" />
        </div>
        <div className={styles.tile__profilePic}>
          <Image src={mypic3} alt="Picture of the author" />
        </div>
      </div>
      <h1>22nd May 2022</h1>
      <h2>John\'s stag party</h2>
    </div>
  );
};

export default Tile;
