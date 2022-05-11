import { response } from 'express';
import React, { useState } from 'react';

const ApiServices = {};

//GET request for all users
const getUsers = async () => {
  const response = await fetch('http://localhost:4000/users');
  const data = await response.json();
  return data;
  // setUsers(data);
};

//GET request for all diems
const getDiems = async () => {
  const response = await fetch('http://localhost:4000/diems');
  const data = await response.json();
  return data;
  // setDiems(data);
};

//GET request for all events
const getEvents = async () => {
  const response = await fetch('http://localhost:4000/events');
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
  const response = await fetch('http://localhost:4000/user', {
    method: 'POST',
    body: JSON.stringify({ name, email, picture }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
  // setUser(data);
  console.log(data);
};

//POST new diem
const submitNewDiem = async (title: String, date: String, user: Number) => {
  const response = await fetch('http://localhost:4000/diem', {
    method: 'POST',
    body: JSON.stringify({ title, date, user }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
  // setDiem(data);
  console.log(data, 'DATA');
};

//DELETE user
const deleteUser = async (id: Number) => {
  const response = await fetch(`http://localhost:4000/user/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
  console.log(data);
};

//DELETE diem
const deleteDiem = async (id: Number) => {
  const response = await fetch(`http://localhost:4000/diem/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
  console.log(data);
};

//DELETE event
const deleteEvent = async (id: Number) => {
  const response = await fetch(`http://localhost:4000/event/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
  console.log(data);
};

const submitNewEvent = async (
  title: String,
  // time: String,
  id: Number
) => {
  const response = await fetch('http://localhost:4000/event', {
    method: 'POST',
    body: JSON.stringify({ title, id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
  console.log(data);
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
};

//export default ApiServices;
