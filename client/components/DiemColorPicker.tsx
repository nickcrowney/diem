<<<<<<< HEAD
import React from "react";
import styles from "./DiemColorPicker.module.css";
=======
import React from 'react';
import { colors } from 'react-select/dist/declarations/src/theme';
import styles from './DiemColorPicker.module.css';
>>>>>>> 19bd82ebde6d469138af486145fb4724a50b74ec

const DiemColorPicker = (setBackgroundColor, backgroundColor) => {
  const getColor = (e) => {
    e.preventDefault();
    // setBackgroundColor((prev) => {
    //   return e.currentTarget.style.backgroundColor;
    // });
    console.log(backgroundColor);
    // console.log(e.currentTarget.style.backgroundColor);
  };

  return (
    <div className={styles.DiemColorPicker__ColorPicker}>
      <button
        type="submit"
        style={{ backgroundColor: '#f28b82' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.red}
<<<<<<< HEAD
        onClick={console.log("rere")}
      ></div>
      <div className={styles.DiemColorPicker__Colors} id={styles.orange}></div>
      <div className={styles.DiemColorPicker__Colors} id={styles.yellow}></div>
      <div className={styles.DiemColorPicker__Colors} id={styles.green}></div>
      <div className={styles.DiemColorPicker__Colors} id={styles.blue}></div>
      <div className={styles.DiemColorPicker__Colors} id={styles.purple}></div>
=======
        onClick={getColor}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: '#fabd04' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.orange}
        onClick={getColor}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: '#fff476' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.yellow}
        onClick={getColor}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: '#ccff90' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.green}
        onClick={getColor}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: '#a7ffeb' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.blue}
        onClick={getColor}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: '#d7affb' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.purple}
        onClick={getColor}
      ></button>
>>>>>>> 19bd82ebde6d469138af486145fb4724a50b74ec
    </div>
  );
};

export default DiemColorPicker;
