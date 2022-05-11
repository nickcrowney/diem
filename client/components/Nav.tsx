import React from 'react';
import styles from './Nav.module.css';
import Image from 'next/image';
import plus from '../public/images/more.png';
import menu from '../public/images/menu.png';
import PopNewDiem from './PopNewDiem';

const Nav = () => {
  const addClick = () => {
    // console.log('fegregreg');
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navBar}>
        <button type="button" onClick={addClick}>
          {/* <Image src={plus} height="50" width="50" />
          <div> */}
          <PopNewDiem />
          {/* </div> */}
        </button>
        <button type="button" onClick={addClick}>
          <Image src={menu} height="50" width="45" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
