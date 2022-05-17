import React from 'react';
import { colors } from 'react-select/dist/declarations/src/theme';
import styles from './DiemColorPicker.module.css';
import hooks from '../services/ApiServices';

const DiemColorPicker = ({
  setBackgroundColor,
  backgroundColor,
  currentDiem,
}) => {
  const getColor = (color) => {
    console.log(backgroundColor);
    // e.preventDefault();
    setBackgroundColor({ 'background-color': color });
    console.log('Loop?');
    hooks.modifyDiem(currentDiem.id, color);

    // setBackgroundColor((prev) => {
    //   return e.currentTarget.style.backgroundColor;
    // });
    // console.log(e.currentTarget.style.backgroundColor);
  };

  return (
    <div className={styles.DiemColorPicker__ColorPicker}>
      <button
        type="submit"
        style={{ 'background-color': '#f28b82' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.red}
        onClick={() => getColor('#f28b82')}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: '#fabd04' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.orange}
        onClick={() => getColor('#fabd04')}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: '#fff476' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.yellow}
        onClick={() => getColor('#fff476')}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: '#ccff90' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.green}
        onClick={() => getColor('#ccff90')}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: '#a7ffeb' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.blue}
        onClick={() => getColor('#a7ffeb')}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: '#d7affb' }}
        className={styles.DiemColorPicker__Colors}
        id={styles.purple}
        onClick={() => getColor('#d7affb')}
      ></button>
    </div>
  );
};

export default DiemColorPicker;
