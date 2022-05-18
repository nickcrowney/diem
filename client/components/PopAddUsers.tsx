import React, { Component } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styles from './PopAddUsers.module.css';
import props from '../services/ApiServices';
import Image from 'next/image';
import plus from '../public/images/more.png';
import Select from 'react-select';

function PopAddUsers({ users, currentDiem, setCurrentDiem }) {
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '300px',
    }),
  };

  const { register, handleSubmit, reset } = useForm();
  const [selectedOptions, setSelectedOptions] = useState([]);

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

  const handleChange = (options) => {
    console.log(options, 'OPTIONS');

    setSelectedOptions((prev) => {
      const option = options[options.length - 1];
      const modObj = option && {
        id: option.value,
        name: option.label,
        userPhoto: option.userPhoto,
      };
      prev = [...prev, modObj];
      return prev;
    });
  };

  const submitHandler = (formData, event) => {
    selectedOptions &&
      selectedOptions.forEach((el) => {
        el && props.updateDiemUser(currentDiem.id, el.id);
      });
    setCurrentDiem((prev) => {
      const obj = { ...prev };

      obj.users = [...obj.users, ...selectedOptions];
      return (prev = obj);
    });
    setSelectedOptions([]);
    reset({ label: '', value: '' });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.addUser}>
        <Select
          styles={customStyles}
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
