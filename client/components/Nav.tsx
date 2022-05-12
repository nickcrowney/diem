import React from 'react';
import styles from './Nav.module.css';
import Image from 'next/image';
import more from '../public/images/more.png';
import menu from '../public/images/menu.png';
import PopNewDiem from './PopNewDiem';

import hooks from '../services/ApiServices';
import mypic from '../public/images/daniil-lobachev-XAo09LtQiAQ-unsplash.jpg';

const Nav = ({ users, setUsers, setNewDiemPop }) => {
  // let use = [];
  // hooks.getUsers().then((res) => (use = res));
  // console.log(use, 'USE');
  // const mypic= users[0].userPhoto

  function handleClick() {
    setNewDiemPop();
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.navBar}>
        <div className={styles.addDiem}>
          <button type="button" onClick={handleClick}>
            <Image src={more} height="40" width="40" />
          </button>
        </div>

        <div className={styles.nav__end}>
          <button type="button">
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
