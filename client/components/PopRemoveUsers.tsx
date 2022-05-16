<<<<<<< HEAD
import React, { Component } from "react";
import dayjs from "dayjs";
import Popup from "reactjs-popup";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import styles from "./PopAddUsers.module.css";
import props from "../services/ApiServices";
import Image from "next/image";

import minus from "../public/images/minus.png";
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

import minus from '../public/images/minus.png';
import Select from 'react-select';
>>>>>>> 41acc10c4db2479a52073540afecf1af7abc12e1

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
    if (currentDiem && currentDiem.users) {
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
        console.log(el, "ELLLLLL");
        return !selectedOptions.some((elem) => {
          if (elem.id === el.id) return true;
          else return false;
        });
      });

      obj.users = user;
      setSelectedOptions([]);
      return obj;
    });
    reset({ label: "", value: "" });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.addUser}>
        <Select
          options={options}
          isMulti
          placeholder="Remove..."
          closeMenuOnScroll
          closeMenuOnSelect={true}
          onChange={handleChange}
        />
        <button type="submit">
          <Image src={minus} height="35" width="35" />
        </button>
      </div>
    </form>
  );
}

export default PopRemoveUsers;
