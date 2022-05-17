import React, { useEffect } from 'react';
import styles from './Nav.module.css';
import Image from 'next/image';
import more from '../public/images/more.png';
import menu from '../public/images/menu.png';
import PopNewDiem from './PopNewDiem';
import usersHook from '../services/testHook';
import hooks from '../services/ApiServices';
import mypic from '../public/images/daniil-lobachev-XAo09LtQiAQ-unsplash.jpg';

const Nav = ({ users, setUsers, setNewDiemPop, loginData }) => {
  function handleClick() {
    setNewDiemPop((prev) => {
      return !prev;
    });
  }
  //console.log(users[0], '0th user');
  const mainUser = users.filter((el) => {
    // return el.email === loginData.email;
    return el.id === 1;
  });

  console.log('PROPS HERE', loginData);

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
            {mainUser && (
              <Image
                src={mainUser[0]?.userPhoto ?? mypic}
                alt="Picture of the author"
                // layout='fill'
                height="50"
                width="50"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
