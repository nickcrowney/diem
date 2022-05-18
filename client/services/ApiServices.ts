import { response } from 'express';
import React, { useState } from 'react';
import { Message } from 'react-hook-form';

//GET request for all users
const getUsers = async () => {
  const response = await fetch('http://localhost:4000/users');
  const data = await response.json();
  return data;
};

//GET request for all diems
const getDiems = async () => {
  const response = await fetch('http://localhost:4000/diems');
  const data = await response.json();
  console.log(data, 'DATA');

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
const submitNewDiem = async (
  title: String,
  date: String,
  user: Number,
  color: String
) => {
  const response = await fetch('http://localhost:4000/diem', {
    method: 'POST',
    body: JSON.stringify({ title, date, user, color }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  console.log(data, 'DATA');

  return data;
  // setDiem(data);
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
  // look into using .then here
  title: String,
  id: Number,
  location: String,
  time: String
  // createdAt: Number
) => {
  try {
    const response = await fetch('http://localhost:4000/event', {
      method: 'POST',

      body: JSON.stringify({ title, id, location, time }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data, 'SUBMITTED NEW EVENT');
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateDiemUser = async (diemId: Number, userId: Number) => {
  const response = await fetch('http://localhost:4000/diem', {
    method: 'PATCH',

    body: JSON.stringify({ diemId, userId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

const removeDiemUser = async (diemId: Number, userId: Number) => {
  const response = await fetch('http://localhost:4000/user/removeDiemUser', {
    method: 'PATCH',
    body: JSON.stringify({ diemId, userId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;

  //console.log(data);
};

const modifyDiemChatHistory = async (
  message: String,
  id: Number,
  author: String,
  time: String
) => {
  const response = await fetch('http://localhost:4000/message', {
    method: 'POST',
    body: JSON.stringify({ message, id, author, time }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('YALALALALA');

  const data = await response.json();
  return data;
  console.log(data);
};

const modifyDiemColor = async (id: Number, color: String) => {
  const response = await fetch('http://localhost:4000/diemColor', {
    method: 'PATCH',
    body: JSON.stringify({ id, color }),
    headers: {
      'Content-Type': 'application/json',
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
  modifyDiemColor,
  removeDiemUser,
  modifyDiemChatHistory,
};

//export default ApiServices;
