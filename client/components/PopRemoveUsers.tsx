import React from "react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./PopAddUsers.module.css";
import props from "../services/ApiServices";
import Image from "next/image";

import minus from "../public/images/minus.png";
import Select from "react-select";

function PopRemoveUsers({ users, currentDiem, setCurrentDiem }) {
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "300px",
    }),
  };

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
          styles={customStyles}
          options={options}
          isMulti
          placeholder="Remove..."
          closeMenuOnScroll
          closeMenuOnSelect={true}
          onChange={handleChange}
        />
        <button type="submit">
          <Image src={minus} height="35" width="35" alt="submit-image" />
        </button>
      </div>
    </form>
  );
}

export default PopRemoveUsers;
