import React from 'react';
import Image from 'next/image';
// replace images with data from db
import mypic from '../public/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg';
import mypic2 from '../public/images/art-hauntington-jzY0KRJopEI-unsplash.jpg';
import mypic3 from '../public/images/christian-buehner-6YQmQgcQ0VA-unsplash.jpg';
import styles from './Tile.module.css';

const Tile: React.FunctionComponent = ({ setDiem, mainDiem }) => {
  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(mainDiem);
  };

  const pics = [mypic, mypic2, mypic3];
  const date = '22nd May 2022';
  const event = "Tim's BBQ";

  return (
    <div className={styles.tile} onClick={divClickedHandler}>
      <div className={styles.tile__profilePics_container}>
        {pics.map((pic) => {
          return (
            <div className={styles.tile__profilePic}>
              <Image src={pic} alt="Picture of the author" />
            </div>
          );
        })}
      </div>

      <div className={styles.tile__info}>
        <h1>{event}</h1>
        <h2>{date}</h2>
      </div>
    </div>
  );
};

export default Tile;
