import React from 'react';
import styles from './Nav.module.css';
import Image from 'next/image';
import more from '../public/images/more.png';
import menu from '../public/images/menu.png';
import mypic from '../public/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg';

const Nav = () => {
  const addClick = () => {
    console.log('fegregreg');
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navBar}>
        <div className={styles.addDiem}>
          <button type="button" onClick={addClick}>
            <Image src={more} height="40" width="40" />
          </button>
        </div>

        <div className={styles.nav__end}>
          <button type="button" onClick={addClick}>
            <Image src={menu} height="32" width="32" />
          </button>

          <div className={styles.nav__profilePic}>
            <Image src={mypic} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
