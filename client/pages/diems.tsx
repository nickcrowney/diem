
import type { NextPage } from "next";
import Head from "next/head";
import Tile from "../components/Tile";
import Diem from "../components/Diem";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import props from "../services/ApiServices";

const Diems: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [mainDiem, setDiem] = useState("");
  useEffect(() => {}, [setData]);
  const currentDate = dayjs().toISOString(); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');

import type { NextPage } from 'next';
import Tile from '../components/Tile';
import Diem from '../components/Diem';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import hooks from '../services/ApiServices';
import { async } from '@firebase/util';

const Diems: NextPage = () => {
  const [data, setData] = useState('');
  const [mainDiem, setDiem] = useState('');
  const [allDiems, setAllDiems] = useState([]);
  const [currentDiem, setCurrentDiem] = useState({ title: 'Select Diem' });
  const [users, setUsers] = useState([]);


  useEffect(() => {}, [data]);
  useEffect(() => {
    hooks
      .getUsers()
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    hooks
      .getDiems()
      .then((res) => {
        setAllDiems(res);
        setCurrentDiem(res[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(hooks.getDiems(), 'AWAITED DIEMS');
  // const currentDate = dayjs().toISOString(); //.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
  return (
    <div>
      <Nav users={users} setUsers={setUsers} />
      <main className={styles.container}>

        <div>
          <Popup
            className={styles.plusdiem}
            trigger={<button> ➕ </button>}
            position="right top"
          >
            <div className={styles.newdiem}>
              <div>{data}</div>

              <form
                onSubmit={handleSubmit((data) => {
                  console.log(data.title, "TITLE");
                  console.log(data.date, "DATE");
                  props.submitNewDiem(data.title, data.date, currentUser);

                  // setData(JSON.stringify(data));
                })}
                className={styles.input}
              >
                <input {...register("diem-name")} placeholder="Diem Name..." />

                <input {...register("title")} placeholder="Diem Name..." />

                <input
                  type="date"
                  min={currentDate}
                  name="date"
                  {...register("date", { required: true })}
                ></input>
                <input type="submit" />
              </form>

              {/* <button>Click here</button> */}
            </div>
          </Popup>
        </div>

        <div className={styles.tiles}>
          <div>
            {allDiems.map((el) => {
              return (
                <div key={el.id}>
                  <Tile
                    setDiem={setDiem}
                    mainDiem={mainDiem}
                    allDiems={allDiems}
                    setAllDiems={setAllDiems}
                    diem={el}
                    setCurrentDiem={setCurrentDiem}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.diem}>
          <Diem mainDiem={mainDiem} currentDiem={currentDiem} />
        </div>
      </main>
    </div>
  );
};

export default Diems;
