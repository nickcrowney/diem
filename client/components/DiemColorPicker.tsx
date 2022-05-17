<<<<<<< HEAD
import React from "react";
import { colors } from "react-select/dist/declarations/src/theme";
import styles from "./DiemColorPicker.module.css";
=======
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
    hooks.modifyDiemColor(currentDiem.id, color);
>>>>>>> 3d2971830c849e78d62199bfd4cc7dd17a86a2ee

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
        style={{ backgroundColor: "#f28b82" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.red}
        onClick={getColor}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: "#fabd04" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.orange}
        onClick={getColor}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: "#fff476" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.yellow}
        onClick={getColor}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: "#ccff90" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.green}
        onClick={getColor}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: "#a7ffeb" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.blue}
        onClick={getColor}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: "#d7affb" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.purple}
        onClick={getColor}
      ></button>
    </div>
  );
};

export default DiemColorPicker;
