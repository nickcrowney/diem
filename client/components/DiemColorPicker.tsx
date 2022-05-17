import React from 'react';
import { colors } from 'react-select/dist/declarations/src/theme';
import styles from './DiemColorPicker.module.css';

const DiemColorPicker = (backgroundColor, setBackgroundColor) => {
  const getColor = () => {
    console.log(backgroundColor);
    // e.preventDefault();
    // setBackgroundColor({ 'background-color': '#f28b82' });
    // setBackgroundColor((prev) => {
    //   return e.currentTarget.style.backgroundColor;
    // });
    // console.log(e.currentTarget.style.backgroundColor);
  };
  const changeColor = () => {
    setBackgroundColor({ 'background-color': 'black' });
  };
  return (
    <div className={styles.DiemColorPicker__ColorPicker}>
      {/* <button onClick={changeColor}>CLICK</button> */}

      <button
        type="submit"
        style={{ 'background-color': '#f28b82' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.red}
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
        style={{ backgroundColor: '#d7affb' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.purple}
        onClick={getColor}
      ></button>
    </div>
  );
};

export default DiemColorPicker;
