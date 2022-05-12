import React from 'react';
import dayjs from 'dayjs';
import Popup from 'reactjs-popup';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styles from './PopNewDiem.module.css';
import props from '../services/ApiServices';
import Image from 'next/image';
import plus from '../public/images/more.png';

const currentDate = dayjs().toISOString(); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
const currentUser = 1;

function PopNewDiem() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    // <Popup
    //   className={styles.form_container}
    //   trigger={<Image src={plus} height="40" width="40" />}
    // >
    <div className={styles.newdiem}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => {
          console.log(data.title, 'TITLE');
          console.log(data.date, 'DATE');
          props.submitNewDiem(data.title, data.date, currentUser);
          // setData(JSON.stringify(data));
        })}
      >
        <input
          {...register('title')}
          placeholder="Diem Name..."
          className="py-2 px-4 rounded"
        />

        <input
          type="date"
          min={currentDate}
          name="date"
          className="py-2 px-4 rounded"
          {...register('date', { required: true })}
        ></input>
        <input
          type="submit"
          id="submitButton"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        />
      </form>

      {/* <button>Click here</button> */}
    </div>
    // </Popup>

    // <Popup
    //   className={styles.form_container}
    //   trigger={<Image src={plus} height="40" width="40" />}
    // >
    //   <div className={styles.newdiem}>
    //     <div>{data}</div>

    //     <form
    //       className={styles.form}
    //       onSubmit={handleSubmit((data) => {
    //         console.log(data.title, 'TITLE');
    //         console.log(data.date, 'DATE');
    //         props.submitNewDiem(data.title, data.date, currentUser);
    //         // setData(JSON.stringify(data));
    //       })}
    //     >
    //       <input
    //         {...register('title')}
    //         placeholder="Diem Name..."
    //         className="py-2 px-4 rounded"
    //       />

    //       <input
    //         type="date"
    //         min={currentDate}
    //         name="date"
    //         className="py-2 px-4 rounded"
    //         {...register('date', { required: true })}
    //       ></input>
    //       <input
    //         type="submit"
    //         className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
    //       />
    //     </form>
    //     <input type="radio" name="color" id="red" value="red" />
    //     <label htmlFor="red">
    //       <span className="red"></span>
    //     </label>

    //

    //     {/* <button>Click here</button> */}
    //   </div>
    // </Popup>
  );
}

export default PopNewDiem;
