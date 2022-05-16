import React from 'react';
import plus from '../public/images/more.png';
import props from '../services/ApiServices';
import { useForm } from 'react-hook-form';
import Popup from 'reactjs-popup';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const currentUser = 1;

const AddNewEvent = ({ currentDiem, setCurrentDiem }) => {
  const { register, handleSubmit, reset } = useForm();

  const [data, setData] = useState('Add new event');
  const [eventText, setEventText] = useState('Add new event');
  currentDiem && console.log(currentDiem.events, 'CURRENT EVENTS');

  const submittedEvent = (event) => {
    console.log(event, 'SUBMITTED EVENT');
    props.submitNewEvent(event, currentDiem.id, '', '');
    setCurrentDiem((prev) => {
      prev.events = [
        ...prev.events,
        { title: event, metaDiemId: currentDiem.id },
      ];
    });
  };
  const openOptions = () => {
    console.log('options open');
  };
  return (
    <div>
      <div
        contentEditable="true"
        // onInput={(e) => console.log(e.currentTarget.textContent, 'CHECK HERE')}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setEventText('Add new');
            submittedEvent(e.currentTarget.textContent);
          }
          if (e.key === '/') openOptions();
        }}
        placeholder={'New event'}
      >
        {eventText}
      </div>
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

              setCurrentDiem((prev) => {
                console.log(prev, 'before');

                prev.events = [
                  ...prev.events,
                  {
                    id: 55,
                    title: data.title,
                    metaDiemId: currentDiem.id,
                    location: data.location,
                    time: data.time,
                  },
                ];
                console.log(prev, 'after');
              });

              props.submitNewEvent(
                data.title,
                currentDiem.id,
                data.location,
                data.time
              );
              reset({ title: '', location: '', time: '' });

              // setData(JSON.stringify(data));
            })}
            className={styles.input}
          >
            <input {...register('title')} placeholder="Event Name..." />
            <input {...register('location')} placeholder="Event Location..." />
            <input {...register('time')} type="time" />

            <input type="submit" />
          </form>
        </div>
      </Popup>
    </div>
  );
};

export default AddNewEvent;
