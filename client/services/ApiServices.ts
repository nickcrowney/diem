import { response } from "express";
import React, { useState } from "react";
import { Message } from "react-hook-form";

//GET request for all users
const getUsers = async () => {
  const response = await fetch("http://localhost:4000/users");
  const data = await response.json();
  return data;
  // setUsers(data);
};

//GET request for all diems
const getDiems = async () => {
  const response = await fetch("http://localhost:4000/diems");
  const data = await response.json();
  console.log(data, "DATA");

  data.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  });
  return data;
  // setDiems(data);
};

//GET request for all events
const getEvents = async () => {
  const response = await fetch("http://localhost:4000/events");
  const data = await response.json();
  return data;
  //setEvents(data);
};

//GET user by id
const getUserById = async (id: Number) => {
  const response = await fetch(`http://localhost:4000/user/byId/${id}`);
  const data = await response.json();
  return data;
  //setUser(data);
};

//GET user by id
const getDiemById = async (id: Number) => {
  const response = await fetch(`http://localhost:4000/diem/byId/${id}`);
  const data = await response.json();
  return data;
  //setDiem(data);
};

//POST new user
const submitNewUser = async (name: String, email: String, picture: String) => {
  const response = await fetch("http://localhost:4000/user", {
    method: "POST",
    body: JSON.stringify({ name, email, picture }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
  // setUser(data);
  console.log(data);
};

//POST new diem
const submitNewDiem = async (
  title: String,
  date: String,
  city: String,
  color: String,
  user: Number
) => {
  const response = await fetch("http://localhost:4000/diem", {
    method: "POST",
    body: JSON.stringify({ title, date, city, user, color }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  console.log(data, "DATA");

  return data;
  // setDiem(data);
};

//DELETE user
const deleteUser = async (id: Number) => {
  const response = await fetch(`http://localhost:4000/user/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
  console.log(data);
};

//DELETE diem
const deleteDiem = async (id: Number) => {
  const response = await fetch(`http://localhost:4000/diem/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
  console.log(data);
};

//DELETE event
const deleteEvent = async (id: Number) => {
  const response = await fetch(`http://localhost:4000/event/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
  console.log(data);
};

const submitNewEvent = async (
  title: String,
  id: Number,
  location: String,
  time: String
) => {
  const response = await fetch("http://localhost:4000/event", {
    method: "POST",

    body: JSON.stringify({ title, id, location, time }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
  console.log(data);
};

const updateDiemUser = async (diemId: Number, userId: Number) => {
  const response = await fetch("http://localhost:4000/diem", {
    method: "PATCH",

    body: JSON.stringify({ diemId, userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const removeDiemUser = async (diemId: Number, userId: Number) => {
  const response = await fetch("http://localhost:4000/user/removeDiemUser", {
    method: "PATCH",

    body: JSON.stringify({ diemId, userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;

  //console.log(data);
};

const updateDiemChatHistory = async (
  diemId: Number,
  chatHistory: Message[]
) => {
  const response = await fetch("http://localhost: 4000/diem", {
    method: "PATCH",

    body: JSON.stringify({ diemId, chatHistory }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};

//TODO add patches for user, diem, and events
// return (
//   <div
//     className="w-screen h-screen bg-slate-100 flex justify-center items-center "
//     onClick={() => getUsers}
//   >
//     Test
//     {/* {users.length &&
//       users.map((el) => {
//         return <div>{el.name}</div>;
//       })} */}
//   </div>
// );

const modifyDiem = async (title: String, id: Number) => {
  const response = await fetch("http://localhost:4000/event", {
    method: "PATCH",
    body: JSON.stringify({ title, id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
  console.log(data);
};

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com',
//     'X-RapidAPI-Key': '294e3b096bmshc3e04cb163d697fp132784jsn7e91ff88ee8e',
//   },
// };

// fetch(
//   'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0',
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export default {
  getUsers,
  getDiems,
  getUserById,
  getDiemById,
  getEvents,
  submitNewUser,
  submitNewDiem,
  submitNewEvent,
  deleteDiem,
  deleteEvent,
  deleteUser,
  updateDiemUser,

  removeDiemUser,

  updateDiemChatHistory,
};

//export default ApiServices;
