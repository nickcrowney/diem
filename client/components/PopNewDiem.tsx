import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import styles from './PopNewDiem.module.css';
import hooks from '../services/ApiServices';

const yesterday = dayjs().add(-1, 'day').toISOString();

function PopNewDiem({ setAllDiems, allDiems, users }) {
  const currentUser = users[0].id;
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {}, [allDiems]);
  return (
    <div className={styles.newdiem}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => {
          hooks
            .submitNewDiem(data.title, data.date, currentUser, data.color)
            .then((res) => {
              setAllDiems((prev) => {
                const copied = [
                  ...prev,
                  {
                    id: res.id,
                    title: res.title,
                    date: res.date,
                    user: currentUser,
                    color: res.color,
                    events: [],
                  },
                ];

                copied.sort(function (a, b) {
                  return new Date(a.date) - new Date(b.date);
                });
                return copied;
              });
            })
            .catch((e) => {
              console.log('error when creating diem', e);
            });
          reset({ title: '', city: '', date: '' });
        })}
      >
        <input
          {...register('title')}
          placeholder="Title..."
          className="py-2 px-4 rounded"
        />

        <input
          type="date"
          className="py-2 px-4 rounded border-none"
          name="date"
          {...register('date', { required: true, min: yesterday })}
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
