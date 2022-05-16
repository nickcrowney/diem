<<<<<<< HEAD
import React, { Component } from "react";
import dayjs from "dayjs";
import Popup from "reactjs-popup";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import styles from "./PopAddUsers.module.css";
import props from "../services/ApiServices";
import Image from "next/image";
import plus from "../public/images/more.png";
import Select from "react-select";
=======
import React, { Component } from 'react';
import dayjs from 'dayjs';
import Popup from 'reactjs-popup';
import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styles from './PopAddUsers.module.css';
import props from '../services/ApiServices';
import Image from 'next/image';
import plus from '../public/images/more.png';
import Select from 'react-select';
>>>>>>> 41acc10c4db2479a52073540afecf1af7abc12e1

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
    if (currentDiem && currentDiem.users) {
      return !currentDiem.users.some((el) => el.id == user.id);
    }
  });

  const options = availableUsers.map((el) => ({
    value: el.id,
    label: el.name,
    userPhoto: el.userPhoto,
  }));

  const submitHandler = (formData, event) => {
    selectedOptions.forEach((el) => {
      props.updateDiemUser(currentDiem.id, el.id);
    });
    setCurrentDiem((prev) => {
      const obj = { ...prev };

      obj.users = [...obj.users, ...selectedOptions];
      return (prev = obj);
    });
    setSelectedOptions([]);
    reset({ label: "", value: "" });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.addUser}>
        <Select
          options={options}
          isMulti
          placeholder="Add..."
          closeMenuOnScroll
          closeMenuOnSelect={true}
          onChange={handleChange}
        />
        <button type="submit">
          <Image src={plus} height="35" width="35" />
        </button>
      </div>
    </form>
  );
}

export default PopAddUsers;
