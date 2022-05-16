import React from 'react';
import styles from './DiemColorPicker.module.css';

const DiemColorPicker = () => {
  return (
    <div className={styles.DiemColorPicker__ColorPicker}>
      <div
        className={styles.DiemColorPicker__Colors}
        id={styles.red}
        onClick={console.log('rere')}
      ></div>
      <div className={styles.DiemColorPicker__Colors} id={styles.orange}></div>
      <div className={styles.DiemColorPicker__Colors} id={styles.yellow}></div>
      <div className={styles.DiemColorPicker__Colors} id={styles.green}></div>
      <div className={styles.DiemColorPicker__Colors} id={styles.blue}></div>
      <div className={styles.DiemColorPicker__Colors} id={styles.purple}></div>
    </div>
  );
};

export default DiemColorPicker;
