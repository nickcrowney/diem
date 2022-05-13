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
          console.log(data.city, 'City');
          props.submitNewDiem(data.title, data.date, data.city, currentUser);
          reset({ title: '', city: '', date: '' });
        })}
        className={styles.form}
      >

        <input {...register('title')} placeholder="Diem Name..." className="py-2 px-4 rounded"/>
        <input {...register('city')} placeholder="Enter city..." />


        <input
          type="date"
          className="py-2 px-4 rounded border-none"
          min={currentDate}
          name="date"
          {...register('date', { required: true })}
        />

        <input
          id="submit"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
}

export default PopNewDiem;
