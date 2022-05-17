import React from 'react';
import plus from '../public/images/more.png';
import props from '../services/ApiServices';
import { useForm } from 'react-hook-form';
import Popup from 'reactjs-popup';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import tick from '../public/tick.svg';

const currentUser = 1;

const AddNewEvent = ({ currentDiem, setCurrentDiem, state, setState }) => {
  const [buttonDisplay, setButtonDisplay] = useState('none');
  const [eventInput, setEventInput] = useState('');
  const { register, handleSubmit, reset } = useForm();

  const [data, setData] = useState('Add new event');
  const [eventText, setEventText] = useState('Add new event here...');
  currentDiem && console.log(currentDiem.events, 'CURRENT EVENTS');

  const submittedEvent = (event) => {
    console.log(event, 'SUBMITTED EVENT');
    props.submitNewEvent(event.eventName, currentDiem.id, '', '');
    setState((prev) => {
      prev = [...prev, { title: event.eventName, metaDiemId: currentDiem.id }];
      console.log(prev, 'UPDATED HERE');

      return prev;
    });
    setButtonDisplay('none');
    reset({ eventName: '' });
    // setEventText('Add new event here...');
  };
  const openOptions = () => {
    console.log('options open');
  };
  const eventSubmitted = () => {
    submittedEvent(eventText);
    setButtonDisplay('none');
    setEventText('Add new event here...');
  };
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(submittedEvent)}
          className={styles.addEvent}
        >
          <input
            {...register('eventName')}
            placeholder="Add event here..."
            className={styles.addEventInput}
            // contentEditable="true"
            // onInput={(e) => {
            //   setEventInput(e.currentTarget.textContent);

            //   console.log(e.currentTarget.textContent, 'CHECK HERE');
            // }}
            // onKeyPress={(e) => {
            //   if (e.key === 'Enter') {
            //     setEventText('');
            //     // setEventText('Add new');
            //     submittedEvent(e.currentTarget.textContent);
            //   }
            //   // if (e.key === '/') openOptions();
            // }}
            // placeholder={'New event'}
            // onClick={() => {
            //   setEventText(' ');
            //   setButtonDisplay('flex');
            // }}
            // onChange={(e) => {
            //   setEventText(e.currentTarget.textContent);
            // }} {eventText} */}
          ></input>
          <input style={{ display: buttonDisplay }} type="submit">
            {/* <Image src={tick} height="35" width="35" /> */}
          </input>
        </form>
        {/*
        {/* <Popup
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

            setData(JSON.stringify(data));
          })}
          className={styles.input}
          >
          <input {...register('title')} placeholder="Event Name..." />
          <input {...register('location')} placeholder="Event Location..." />
          <input {...register('time')} type="time" />

          <input type="submit" />
          </form>
          </div>
        </Popup> */}
      </div>
    </>
  );
};

export default AddNewEvent;
