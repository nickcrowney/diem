import { useEffect, useContext } from 'react';
import Image from 'next/image';
import calendar from '../public/images/calendar.png';
import chat from '../public/images/chat.png';
import prosAndCons from '../public/images/pros-and-cons.png';
import plus from '../public/images/plus.png';
import styles from './DiemInfoBar.module.css';
import { SocketContext } from '../contexts/Socket';
import hooks from '../services/ApiServices';
import Popup from 'reactjs-popup';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import deleteBin from '../public/deleteBin.svg';

const DiemInfoBar: React.FunctionComponent = ({
  currentDiem,
  setCurrentDiem,
  setAddRemoveUser,
  allDiems,
  setAllDiems,
  refresh,
  setRefresh,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const socket = useContext(SocketContext);
  useEffect(() => {}, [currentDiem]);

  function handleClick() {
    setAddRemoveUser((prev) => {
      return !prev;
    });
  }
  const clickDeleteDiem = () => {
    currentDiem.events &&
      currentDiem.events.forEach((el) => {
        console.log(el.id, 'ID OF EL');
        hooks.deleteEvent(el.id);
      });
    currentDiem.id && hooks.deleteDiem(currentDiem.id);
    currentDiem.id &&
      setAllDiems(
        (prev) => (prev = prev.filter((el) => el.id !== currentDiem.id))
      );
    if (currentDiem.length) setCurrentDiem(allDiems[0]); // maybe not using
    else {
      setCurrentDiem(undefined);
    }
  };

  function dateFixer(calendarDate) {
    const options = {
      day: 'numeric',
      month: 'long',
    };
    const currentDate = new Date(calendarDate).toLocaleDateString(
      'en-GB',
      options
    );
    const firstWhite = currentDate.indexOf(' ');
    const firstBit = currentDate.slice(0, firstWhite);
    const secondBit = currentDate.slice(firstWhite);
    const nth = function (d) {
      const dString = String(d);
      const last = +dString.slice(-2);
      if (last > 3 && last < 21) return 'th';
      switch (last % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };
    const finishedDate = firstBit + nth(firstBit) + secondBit;
    return finishedDate;
  }
  const date = dateFixer(currentDiem && currentDiem.date);
  const yesterday = dayjs().add(-1, 'day').toISOString();

  let count = 0;
  return (
    <div className={styles.diemInfoBar}>
      <div>
        <div
          className={styles.diemInfoBar__title}
          contentEditable={true}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              // console.log(event.target.innerText, 'key pressed');
              hooks.modifyDiemTitle(currentDiem.id, event.target.innerText);
              setAllDiems((diems) => {
                const copy = diems;
                console.log(copy, 'before map copy');
                const mapped = copy.map((diem) => {
                  diem.id === currentDiem.id
                    ? (diem.title = event.target.innerText)
                    : diem;
                  return diem;
                });
                console.log(mapped, 'after map copy');
                return mapped;
              });
              setCurrentDiem((prev) => {
                const copy = prev;
                copy.title = event.target.innerText;
                return copy;
              });
            }
          }}
        >
          {currentDiem && currentDiem.title}
        </div>
        <Popup trigger={<button>{date}</button>} position="right center">
          <form
            onSubmit={handleSubmit((data) => {
              hooks.modifyDiemDate(currentDiem.id, data.date);

              setAllDiems((diems) => {
                const copy = diems;
                const mapped = copy.map((diem) => {
                  diem.id === currentDiem.id ? (diem.date = data.date) : diem;
                  return diem;
                });
                return mapped;
              });
              setCurrentDiem((prev) => {
                const copy = prev;
                copy.date = data.date;
                return copy;
              });
              setRefresh((prev) => prev + 1);
            })}
          >
            <input
              type="date"
              className="py-2 px-4 rounded border-none"
              name="date"
              {...register('date', { required: true, min: yesterday })}
            />
            <button type="submit">Submit</button>
          </form>
        </Popup>
      </div>
      <div className={styles.diemInfoBar__picsAndButtons}>
        <div className={styles.diemInfoBar__profilePics_container}>
          {currentDiem.users && currentDiem.users.length >= 8 ? (
            <div className={styles.diemInfoBar__profilePic_plusSign}>
              <Image src={plus} alt="more than eight users" />
            </div>
          ) : (
            ''
          )}

          {currentDiem.users &&
            currentDiem.users.map((el) => {
              if (count < 8)
                return (
                  <div key={el.id} className={styles.diemInfoBar__profilePic}>
                    <Image
                      src={el && el.userPhoto}
                      height="50"
                      width="50"
                      alt="Picture of the author"
                    />
                    {count++}
                  </div>
                );
            })}
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
        <div>
          <Popup
            trigger={
              <button>
                <Image
                  src={deleteBin}
                  height="42"
                  width="42"
                  alt="delete-bin-image"
                />
              </button>
            }
            position="right center"
          >
            <div
              style={{
                backgroundColor: 'whitesmoke',
                padding: '5px',
                borderRadius: '5px',
                fontSize: 'large',
              }}
            >
              <button onClick={clickDeleteDiem} className={styles.deleteDiem}>
                Delete
              </button>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
};
export default DiemInfoBar;
