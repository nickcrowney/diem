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
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState('Add new diem');

  return (
    <div className={styles.newdiem}>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data.title, 'TITLE');
          console.log(data.date, 'DATE');
          props.submitNewDiem(data.title, data.date, currentUser);
          reset({ title: '', date: '' });
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
    </div>
  );
}

export default PopNewDiem;
