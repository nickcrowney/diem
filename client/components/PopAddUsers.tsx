import React, { Component } from "react";
import dayjs from "dayjs";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import styles from "./PopNewDiem.module.css";
import props from "../services/ApiServices";
import Image from "next/image";
import plus from "../public/images/more.png";
import Select from "react-select";

const currentDate = dayjs().toISOString(); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
const currentUser = 1;

//     [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];
function PopAddUsers({ users }) {
  const { register, handleSubmit, reset } = useForm();
  //users && console.log(users, 'USERS IN POP ADD USERS');
  const options = users.map((el) => ({
    value: el.id,
    label: el.name,
  }));
  // console.log(options);
  //   const [data, setData] = useState('Add new diem');

  return (
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
      <Select
        options={options}
        isMulti
        // {...register('title')}
        placeholder="Add people..."
      />
      <input type="submit" />
    </div>
  );
}

export default PopAddUsers;
