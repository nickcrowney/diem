import React from 'react';
import dayjs from 'dayjs';
import Popup from 'reactjs-popup';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import props from '../services/ApiServices';
import Image from 'next/image';
import plus from '../public/images/more.png';

const currentDate = dayjs().toISOString(); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');

const currentUser = 1;
function PopNewDiem() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    <div>
      <div>
        <Popup
          className={styles.plusdiem}
          trigger={<Image src={plus} height="40" width="40" />}
          position="right top"
        >
          <div className={styles.newdiem}>
            <div>{data}</div>

            <form
              onSubmit={handleSubmit((data) => {
                console.log(data.title, 'TITLE');
                console.log(data.date, 'DATE');
                props.submitNewDiem(data.title, data.date, currentUser);

                // setData(JSON.stringify(data));
              })}
              className={styles.input}
            >
              <input {...register('title')} placeholder="Diem Name..." />

              <input
                type="date"
                min={currentDate}
                name="date"
                {...register('date', { required: true })}
              ></input>
              <input type="submit" />
            </form>

            {/* <button>Click here</button> */}
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default PopNewDiem;
