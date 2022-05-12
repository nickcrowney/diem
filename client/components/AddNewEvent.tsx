import React from 'react';
import plus from '../public/images/more.png';
import props from '../services/ApiServices';
import { useForm } from 'react-hook-form';
import Popup from 'reactjs-popup';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const currentUser = 1;

const AddNewEvent = ({ currentDiem }) => {
  const { register, handleSubmit, reset } = useForm();

  const [data, setData] = useState('Add new event');
  return (
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
              console.log(data.location, 'LOCATION');
              console.log(data.time, 'TIME');
              console.log(currentDiem.id, 'CURRENT');

              props.submitNewEvent(
                data.title,
                currentDiem.id,
                data.location,
                data.time
              );
              reset({ title: '' });

              // setData(JSON.stringify(data));
            })}
            className={styles.input}
          >
            <input {...register('title')} placeholder="Event Name..." />
            <input {...register('location')} placeholder="Event Location..." />
            <input {...register('time')} type="time" />

            {/* <input
              type="date"
              // min={currentDate}
              name="date"
              {...register('date', { required: true })}
            ></input> */}
            <input type="submit" />
          </form>

          {/* <button>Click here</button> */}
        </div>
      </Popup>
    </div>
  );
};

export default AddNewEvent;
