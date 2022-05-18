import React, { useEffect, useContext } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import more from "../public/images/more.png";
import menu from "../public/images/menu.png";
import PopNewDiem from "./PopNewDiem";
import usersHook from "../services/testHook";
import hooks from "../services/ApiServices";
import mypic from "../public/images/daniil-lobachev-XAo09LtQiAQ-unsplash.jpg";

import useLoginContext from "../contexts/Context";

const Nav = ({
  users,
  setUsers,
  newDiemPop,
  setNewDiemPop,
  setAllDiems,
  allDiems,
}) => {
  function handleClick() {
    setNewDiemPop((prev) => {
      return !prev;
    });
  }
  const { loginInfo, setLoginInfo } = useLoginContext();
  //const loginData = useContext(LoginContext);
  // const mainUser = users[0];
  // console.log(mainUser, "MAIN");
  // const mainUser = users.filter((el) => {
  //   return el.email === loginData.email;
  //   TODO;
  //   // return el.id === 1;
  // });

  console.log("PROPS HERE", loginInfo);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navBar}>
        <div className={styles.addDiem}>
          <button type="button" onClick={handleClick}>
            <Image src={more} height="40" width="40" />
          </button>
          {newDiemPop && (
            <PopNewDiem
              allDiems={allDiems}
              setAllDiems={setAllDiems}
              users={users}
            />
          )}
        </div>

        <div className={styles.nav__end}>
          <button type="button">
            <Image src={menu} height="32" width="32" />
          </button>
          <div className={styles.nav__profilePic}>
            {loginInfo && (
              <Image
                src={loginInfo?.photoURL ?? mypic}
                alt="Picture of the author"
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
