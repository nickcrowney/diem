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

function PopAddUsers({ users, currentDiem, setCurrentDiem }) {
  const { register, handleSubmit, reset } = useForm();

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (options) => {
    setSelectedOptions((prev) => {
      const modObj = options.map((obj) => {
        return {
          id: obj.value,
          name: obj.label,
          userPhoto: obj.userPhoto,
        };
      });
      prev = [...prev, ...modObj];
      return prev;
    });
  };

  const availableUsers = users.filter((user) => {
    if (currentDiem) {
      return !currentDiem.users.some((el) => el.id == user.id);
    }
  });
  //   users && console.log(users, 'USERS IN POP ADD USERS');
  // // // //   const availableUsers = users.filter((el) => {
  // // // //     let arrayIds = currentDiem.users.map((elem) => {
  // // // //       elem.id;
  // // // //       //   elem.id !== el.id;
  // // // //     });
  // // // //     !arrayIds.includes(el);
  // // // //   });

  // // // //   console.log(availableUsers, 'CURRENT DIEM USERZ');
  const options = availableUsers.map((el) => ({
    value: el.id,
    label: el.name,
    userPhoto: el.userPhoto,
  }));

  //   console.log(options);

  //   const [data, setData] = useState('Add new diem');
  console.log(currentDiem, 'CURRENT DIEM HERE');
  const submitHandler = (formData, event) => {
    console.log(selectedOptions, 'SELECTEDDDDD');

    selectedOptions.forEach((el) => {
      console.log(el, 'EEELLLLLL');

      props.updateDiemUser(currentDiem.id, el.id);
    });
    setCurrentDiem((prev) => {
      const obj = { ...prev };
      // const TESTOBJ = JSON.stringify(prev).split(':');

      obj.users = [...obj.users, ...selectedOptions];
      return (prev = obj);
      // const newObj = {};
      //   prev.users = [...prev.users, ...selectedOptions];
      //   Object.assign(newObj, prev);
      //   setSelectedOptions([]);
      //   return newObj;
    });
    setSelectedOptions([]);
    reset({ label: '', value: '' });
  };

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
          placeholder=" Add people..."
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
