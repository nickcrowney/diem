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

function PopRemoveUsers({ users, currentDiem, setCurrentDiem }) {
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
    if (currentDiem.users) {
      return currentDiem.users.some((el) => el.id == user.id);
    }
  });

  const options = availableUsers.map((el) => ({
    value: el.id,
    label: el.name,
    userPhoto: el.userPhoto,
  }));

  const submitHandler = (formData, event) => {
    selectedOptions.forEach((el) => {
      props.removeDiemUser(currentDiem.id, el.id);
    });
    setCurrentDiem((prev) => {
      const obj = { ...prev };

      const user = obj.users.filter((el) => {
        console.log(el, 'ELLLLLL');
        return !selectedOptions.some((elem) => {
          if (elem.id === el.id) return true;
          else return false;
        });
      });

      obj.users = user;
      console.log(obj, 'OBJ USERSZZZ');
      setSelectedOptions([]);
      return obj;
    });
    reset({ label: '', value: '' });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.newdiem}>
        <Select
          options={options}
          isMulti
          placeholder=" Remove people..."
          closeMenuOnScroll
          closeMenuOnSelect={true}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default PopRemoveUsers;
