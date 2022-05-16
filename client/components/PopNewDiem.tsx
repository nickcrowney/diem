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
  const getColor = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.style.backgroundColor);
  };

  return (
    <div className={styles.newdiem}>
      <form
        onSubmit={handleSubmit((data) => {
          const dateLong = new Date(data.date);
          console.log(data.title, 'TITLE');
          console.log(dateLong, 'date long');
          console.log(data.date, 'DATE');
          console.log(data.city, 'City');
          props.submitNewDiem(data.title, data.date, data.city, currentUser);
          reset({ title: '', city: '', date: '' });
        })}
        className={styles.form}
      >
        <input
          {...register('title')}
          placeholder="Diem Name..."
          className="py-2 px-4 rounded"
        />
        <input
          {...register('city')}
          placeholder="Enter city..."
          className="py-2 px-4 rounded"
        />

        <input
          type="date"
          className="py-2 px-4 rounded border-none"
          min={currentDate}
          name="date"
          {...register('date', { required: true })}
        />

        <div className={styles.colorPicker}>
          <button
            type="submit"
            style={{ backgroundColor: '#f28b82' }}
            className={styles.colors}
            id={styles.red}
            onClick={getColor}
          ></button>
          <button
            type="submit"
            style={{ backgroundColor: '#fabd04' }}
            className={styles.colors}
            id={styles.orange}
            onClick={getColor}
          ></button>
          <button
            type="submit"
            style={{ backgroundColor: '#fff476' }}
            className={styles.colors}
            id={styles.yellow}
            onClick={getColor}
          ></button>
          <button
            type="submit"
            style={{ backgroundColor: '#ccff90' }}
            className={styles.colors}
            id={styles.green}
            onClick={getColor}
          ></button>
          <button
            type="submit"
            style={{ backgroundColor: '#a7ffeb' }}
            className={styles.colors}
            id={styles.blue}
            onClick={getColor}
          ></button>
          <button
            type="submit"
            style={{ backgroundColor: '#d7affb' }}
            className={styles.colors}
            id={styles.purple}
            onClick={getColor}
          ></button>
        </div>

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
