import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import hooks from '../services/ApiServices';
import styles from '../styles/Home.module.css';

const AddNewEvent = ({
  currentDiem,
  setCurrentDiem,
  state,
  setState,
  backgroundColor,
}) => {
  const [buttonDisplay, setButtonDisplay] = useState('none');
  const { register, handleSubmit, reset } = useForm();

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
              },
            ];
            setCurrentDiem((prev) => {
              prev.events = copy;
              return prev;
            });

            return copy;
          });
        });
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
