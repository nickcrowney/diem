import React from 'react';
import props from '../services/ApiServices';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

const AddNewEvent = ({ currentDiem, setState }) => {
  const [buttonDisplay, setButtonDisplay] = useState('none');
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState('Add new event');
  const [eventText, setEventText] = useState('Add new event here...');

  const submittedEvent = (event) => {
    console.log(currentDiem, 'CURRENT DIEM', currentDiem.id, 'ID');

    currentDiem &&
      props.submitNewEvent(event.eventName, currentDiem.id, '', '');
    currentDiem &&
      setState((prev) => {
        prev = [
          ...prev,
          { title: event.eventName, metaDiemId: currentDiem.id },
        ];

        return prev;
      });
    setButtonDisplay('none');
    reset({ eventName: '' });
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
            style={{ backgroundColor: currentDiem && currentDiem.color }}
          ></input>
          <input style={{ display: buttonDisplay }} type="submit"></input>
        </form>
      </div>
    </>
  );
};

export default AddNewEvent;
