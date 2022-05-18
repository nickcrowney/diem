import React, { useEffect } from 'react';
import hooks from '../services/ApiServices';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

const AddNewEvent = ({
  currentDiem,
  setCurrentDiem,
  state,
  setState,
  backgroundColor,
}) => {
  const [buttonDisplay, setButtonDisplay] = useState('none');
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState('Add new event');
  const [eventText, setEventText] = useState('Add new event here...');

  useEffect(() => {}, [currentDiem]);
  const submittedEvent = (event) => {
    setButtonDisplay('none');
    reset({ eventName: '' });

    currentDiem &&
      hooks
        .submitNewEvent(event.eventName, currentDiem.id, '', '')
        .then((res) => {
          setState((prev) => {
            const copy = [
              ...prev,
              {
                id: res.id,
                title: res.title,
                metaDiemId: currentDiem.id,
                // createdAt: Number(Date.now().toString().slice(0, 10)),
              },
            ];
            setCurrentDiem((prev) => {
              // { ...currentDiem, events: copy } WHY WONT WORK

              // console.log(prev, 'WHAT');
              // return prev;
              prev.events = copy;
              return prev;
            });

            return copy;
          });
        });
  };
  const openOptions = () => {
    console.log('options open');
  };
  const eventSubmitted = () => {
    submittedEvent(eventText);
    setButtonDisplay('none');
    setEventText('Add new event here...');
  };
  useEffect(() => {}, [backgroundColor]);
  useEffect(() => {}, [state]);

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
            style={backgroundColor}
          ></input>
          <input style={{ display: buttonDisplay }} type="submit"></input>
        </form>
      </div>
    </>
  );
};

export default AddNewEvent;
