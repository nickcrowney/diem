
import React, { Component } from 'react';
import dayjs from 'dayjs';
import Popup from 'reactjs-popup';
import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styles from './PopNewDiem.module.css';
import props from '../services/ApiServices';
import Image from 'next/image';
import plus from '../public/images/more.png';
import Select from 'react-select';

const currentDate = dayjs().toISOString(); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
const currentUser = 1;

//     [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];
function PopAddUsers({ users, currentDiem, setCurrentDiem }) {
  const { register, handleSubmit, reset } = useForm();

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (options) => {
    setSelectedOptions(options);
  };
  //   users && console.log(users, 'USERS IN POP ADD USERS');

  const options = users.map((el) => ({
    value: el.id,
    label: el.name,
  }));

  //   console.log(options);

  //   const [data, setData] = useState('Add new diem');
  console.log(currentDiem, 'CURRENT DIEM HERE');
  const submitHandler = (formData, event) => {
    console.log('Form Data: ', formData);
    console.log('Selected Options: ', selectedOptions);
    selectedOptions.forEach((el) => {
      props.updateDiemUser(currentDiem.id, el.value);
      setCurrentDiem((prev) => {
        console.log(prev);
        prev.users = [...prev.users, { id: el.value, name: el.label }];
        console.log(prev, 'AFTER');
        return prev;
        // let diem = Object.assign({}, prev);

        // diem.users = [
        //   ...diem.users,
        //   (diem.users.connect = {
        //     id: el.value,
        //   }),
        // ];
        // return diem;
      });
    });

    reset({ label: '' });
  };
  useEffect(() => {
    setCurrentDiem((prev) => (prev = prev));
  }, [handleSubmit]);

  //   function submitHandler(data) {
  //     console.log(data, 'DATA HERE');
  //     //   console.log(data.date, 'DATE');
  //     //   props.submitNewDiem(data.title, data.date, currentUser);
  //     // setData(JSON.stringify(data));
  //   }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.newdiem}>
        {/* <form
        className={styles.form}
        onSubmit={handleSubmit((data) => {
            console.log(data.title, 'TITLE');
            console.log(data.date, 'DATE');
            props.submitNewDiem(data.title, data.date, currentUser);
            // setData(JSON.stringify(data));
        })}
    > */}
        {/* <input
          {...register('title')}
          placeholder="Diem Name..."
          className="py-2 px-4 rounded"
        /> */}

        {/* <form
        onSubmit={handleSubmit((data) => {
            console.log(data.title, 'TITLE');
            console.log(data.date, 'DATE');
            props.submitNewDiem(data.title, data.date, currentUser);
            reset({ title: '', date: '' });

            // setData(JSON.stringify(data));
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
    </form> */}
        {/* <Controller> */}
        <Select
          options={options}
          isMulti
          // {...register('title')}
          placeholder="Add people..."
          closeMenuOnScroll
          closeMenuOnSelect={true}
          onChange={handleChange}
          //   value={options.find((c) => c.value === value)}
          //   onChange={(val) => onChange(val.value)}
        />
        {/* </Controller> */}

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default PopAddUsers;
