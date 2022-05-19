import { useEffect, useContext } from "react";
import Image from "next/image";
import calendar from "../public/images/calendar.png";
import chat from "../public/images/chat.png";
import prosAndCons from "../public/images/pros-and-cons.png";
import plus from "../public/images/plus.png";
import styles from "./DiemInfoBar.module.css";
import { SocketContext } from "../contexts/Socket";

const DiemInfoBar: React.FunctionComponent = ({
  onlineUsers,
  currentDiem,
  setAddRemoveUser,
}) => {
  const socket = useContext(SocketContext);
  useEffect(() => {}, [currentDiem]);
  console.log("ONLINE USERS", onlineUsers);

  function handleClick() {
    setAddRemoveUser((prev) => {
      return !prev;
    });
  }

  function dateFixer(calendarDate) {
    const options = {
      day: "numeric",
      month: "long",
    };
    const currentDate = new Date(calendarDate).toLocaleDateString(
      "en-GB",
      options
    );
    const firstWhite = currentDate.indexOf(" ");
    const firstBit = currentDate.slice(0, firstWhite);
    const secondBit = currentDate.slice(firstWhite);
    const nth = function (d) {
      const dString = String(d);
      const last = +dString.slice(-2);
      if (last > 3 && last < 21) return "th";
      switch (last % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    const finishedDate = firstBit + nth(firstBit) + secondBit;
    return finishedDate;
  }
  const date = dateFixer(currentDiem && currentDiem.date);

  return (
    <div className={styles.diemInfoBar}>
      <div>
        <div className={styles.diemInfoBar__title}>
          {currentDiem && currentDiem.title}
        </div>
        <h2>{date}</h2>
      </div>
      <div className={styles.diemInfoBar__picsAndButtons}>
        <div className={styles.diemInfoBar__profilePics_container}>
          {currentDiem.users && (
            <div className={styles.diemInfoBar__profilePic_plusSign}>
              <Image src={plus} alt="more than eight users" />
            </div>
          )}
          {currentDiem && currentDiem.users // always truthy
            ? currentDiem.users.map((el) => {
                //TODO Online user logic goes here
                return (
                  <div key={el.id} className={styles.diemInfoBar__profilePic}>
                    <Image
                      src={el && el.userPhoto}
                      height="50"
                      width="50"
                      alt="Picture of the author"
                    />
                  </div>
                );
              })
            : ""}
        </div>
        <div className={styles.diemInfoBar__buttons}>
          <button type="button">
            <Image
              src={prosAndCons}
              height="40"
              width="40"
              onClick={handleClick}
              alt="pros-cons-image"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default DiemInfoBar;
