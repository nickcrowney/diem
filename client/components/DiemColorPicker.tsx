import React from "react";
import styles from "./DiemColorPicker.module.css";
import hooks from "../services/ApiServices";

const DiemColorPicker = ({
  setBackgroundColor,
  backgroundColor,
  currentDiem,
  setAllDiems,
}) => {
  const getColor = (color) => {

    currentDiem.id && setBackgroundColor({ 'background-color': color });

    currentDiem.id && hooks.modifyDiemColor(currentDiem.id, color);
    setAllDiems((diems) => {
      const copy = diems;
      const mapped = copy.map((diem) => {
        diem.id === currentDiem.id ? (diem.color = color) : diem;
        return diem;
      });
      return mapped;
    });
  };

  return (
    <div className={styles.DiemColorPicker__ColorPicker}>
      <button
        type="submit"
        style={{ backgroundColor: "#f28b82" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.red}
        onClick={() => getColor("#f28b82")}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: "#fabd04" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.orange}
        onClick={() => getColor("#fabd04")}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: "#fff476" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.yellow}
        onClick={() => getColor("#fff476")}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: "#ccff90" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.green}
        onClick={() => getColor("#ccff90")}
      ></button>
      <button
        type="submit"
        style={{ backgroundColor: "#d7affb" }}
        className={styles.DiemColorPicker__Colors}
        id={styles.purple}
        onClick={() => getColor("#d7affb")}
      ></button>
    </div>
  );
};

export default DiemColorPicker;
