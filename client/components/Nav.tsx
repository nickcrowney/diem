import React from 'react';
import styles from './Nav.module.css';
import Image from 'next/image';
import plus from '../public/images/more.png';
import menu from '../public/images/menu.png';
import PopNewDiem from './PopNewDiem';
import guillems from '../services/ApiServices';

const Nav = ({ users, setUsers }) => {
  const addClick = () => {
    // console.log('fegregreg');
  };
  // let use = [];
  // guillems.getUsers().then((res) => (use = res));
  // console.log(use, 'USE');

  return (
    <div className={styles.navContainer}>
      <div className={styles.navBar}>
        <button type="button" onClick={addClick}>
          <PopNewDiem />
        </button>
        <div>
          {' '}
          {users.map((el) => {
            return <div>{el.name}</div>;
          })}
        </div>
        <button type="button" onClick={addClick}>
          <Image src={menu} height="50" width="45" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
