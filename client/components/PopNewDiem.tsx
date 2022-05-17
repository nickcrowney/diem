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

function PopNewDiem({ setAllDiems, allDiems }) {
  const { register, handleSubmit, reset } = useForm();

  const [data, setData] = useState('Add new diem');

  return (
    <div className={styles.newdiem}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => {
          const dateLong = new Date(data.date);
          console.log(data.title, 'TITLE');
          console.log(dateLong, 'date long');
          console.log(data.date, 'DATE');
          console.log(data.city, 'City');
          console.log(data.color, 'Color');
          props.submitNewDiem(
            data.title,
            data.date,
            data.city,
            currentUser,
            data.color
          );
          setAllDiems((prev) => {
            prev = [
              ...prev,
              {
                title: data.title,
                date: data.date,
                city: data.city,
                user: currentUser,
                color: data.color,
              },
            ];
            prev.sort(function (a, b) {
              return new Date(a.date) - new Date(b.date);
            });
            return prev;
          });
          reset({ title: '', city: '', date: '' });
        })}
      >
        <input
          {...register('title')}
          placeholder="Diem Name..."
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
          <input
            {...register('color')}
            type="radio"
            className={styles.colors}
            name="color"
            id="red"
            value="#f28b82"
            style={{ backgroundColor: '#f28b82' }}
          />
          <input
            {...register('color')}
            type="radio"
            className={styles.colors}
            id="orange"
            value="#fabd04"
            style={{ backgroundColor: '#fabd04' }}
          />
          <input
            {...register('color')}
            type="radio"
            className={styles.colors}
            id="yellow"
            value="#fff476"
            style={{ backgroundColor: '#fff476' }}
          />
          <input
            {...register('color')}
            type="radio"
            className={styles.colors}
            id="green"
            value="#ccff90"
            style={{ backgroundColor: '#ccff90' }}
          />
          <input
            {...register('color')}
            type="radio"
            className={styles.colors}
            id="purple"
            value="#d7affb"
            style={{ backgroundColor: '#d7affb' }}
          />
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
