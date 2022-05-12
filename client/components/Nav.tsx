import React, { useEffect } from 'react';
import styles from './Nav.module.css';
import Image from 'next/image';
import more from '../public/images/more.png';
import menu from '../public/images/menu.png';
import PopNewDiem from './PopNewDiem';
import usersHook from '../services/testHook';
import hooks from '../services/ApiServices';
import mypic from '../public/images/daniil-lobachev-XAo09LtQiAQ-unsplash.jpg';

const Nav = ({ users, setUsers, setNewDiemPop }) => {
  // const { state } = usersHook(); //All our users
  // const usersNew = state;
  // // let use = [];
  // // hooks.getUsers().then((res) => (use = res));
  // // console.log(use, 'USE');
  // // const mypic= users[0].userPhoto
  // useEffect(() => {}, []);
  function handleClick() {
    setNewDiemPop();
  }
  console.log(users[0], '0th user');
  // console.log(usersNew, ' user');

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
            {/* {users && (
              <img
                src={users[0].userPhoto}
                height="40"
                width="40"
                alt="image"
              ></img>
            )} */}
            {users && (
              <Image
                src={users[0]?.userPhoto ?? mypic}
                alt="Picture of the author"
                // layout='fill'
                height="50"
                width="50"
              />
            )}

            {/* <Image
              src={
                'https://lh3.googleusercontent.com/a/AATXAJwnBwM1NkzHzTW9OyrliLoNxmegm-OhA1NfoWU0=s96-c'
              }
              alt="Picture of the author"
              height="40"
              width="40"
            /> */}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
