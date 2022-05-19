import React, { useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import styles from '../styles/Home.module.css';
import hooks from '../services/ApiServices';
import deleteBin from '../public/deleteBin.svg';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import prosAndCons from '../public/images/pros-and-cons.png';
import { useForm } from 'react-hook-form';
import GoogleMap from './GoogleMap';

interface ItemType {
  id: number;
  name: string;
}
function DisplayEvents({
  currentDiem,
  setCurrentDiem,
  state,
  setState,
  setAllDiems,
}) {
  const [addRemoveInfo, setAddRemoveInfo] = useState(false);
  const [mapPin, setMapPin] = useState(
    currentDiem.location && currentDiem.location
  );

  const { register, handleSubmit, reset } = useForm();

  // useEffect(() => {
  //   currentDiem.location && setMapPin(currentDiem.location);
  //   currentDiem.location &&
  //     console.log(mapPin && mapPin, 'map pin', currentDiem.location, 'loc');
  // }, [mapPin, currentDiem]);
  useEffect(() => {
    setState(currentDiem.events);
  }, [currentDiem]);
  useEffect(() => {
    setState(currentDiem.events);
  }, [currentDiem.events]);
  useEffect(() => {}, [state]);

  const clickedEvent = (item) => {};
  const removeEvent = (id) => {
    console.log('remove event');
  };
  // useEffect(() => {
  //   state && state.length
  //     ? hooks.modifyOrderedEvents(currentDiem.id, state)
  //     : '';
  //   console.log(state, 'STATE');
  // }, [currentDiem.id, state]);
  return (
    <>
      {state && currentDiem.events ? (
        <ReactSortable list={state} setList={setState}>
          {state.map((item) => (
            <>
              <div className={styles.events}>
                <Popup
                  trigger={
                    <button>
                      <div className={styles.eventgroup}>
                        <div
                          key={item.id}
                          onClick={() => clickedEvent(item)}
                          className={styles.event_items}
                        >
                          {item.title}
                          {''}
                        </div>
                        {item.photo && (
                          <img
                            src={item.photo}
                            width="200"
                            height="100"
                            className={styles.event_items}
                            alt="event-image"
                          ></img>
                        )}
                      </div>
                    </button>
                  }
                  position="right top"
                >
                  <div
                    style={{
                      height: '40vh',
                      width: '40vw',
                      backgroundColor: '#f7f9fb',
                      padding: '5px',
                      borderRadius: '20px',
                      fontSize: 'large',
                    }}
                  >
                    <div className={styles.addRemoveUsers}>
                      {item.location && <div>Location: {item.location}</div>}
                      {item.time && <div>Time: {item.time}</div>}
                    </div>
                    <div>
                      {mapPin && (
                        <iframe
                          width="100%"
                          height="200"
                          style={{ margin: '1em 0', borderRadius: '5px' }}
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBsNI21BHJIIKWSngJbtch5hnqfnLlTP6o&q=${mapPin}`}
                        ></iframe>
                      )}
                    </div>
                    <Popup
                      trigger={
                        <button onClick={() => {}}>
                          <Image
                            src={prosAndCons}
                            onClick={() => {
                              setAddRemoveInfo((prev) => {
                                return !prev;
                              });
                            }}
                            height="20"
                            width="20"
                            alt="delete-bin-image"
                          />
                        </button>
                      }
                    ></Popup>

                    {addRemoveInfo && (
                      <>
                        <form
                          onSubmit={handleSubmit((data) => {
                            console.log(data, 'DATAYYY', item.id);

                            hooks
                              .modifyEvent(
                                item.id,
                                data.title || item.title,
                                data.location || item.location,
                                data.time || item.time,
                                data.photo || item.photo
                              )

                              .then((res) => {
                                setAllDiems((diems) => {
                                  const copy = diems;
                                  const mapped = copy.map((diem) => {
                                    if (diem.id === item.id && data.title) {
                                      diem.title = data.title;
                                      console.log(data.title);
                                    }
                                    if (diem.id === item.id && data.location) {
                                      diem.location = data.location;
                                      console.log(data.location);
                                    }
                                    if (diem.id === item.id && data.time) {
                                      diem.time = data.time;
                                      console.log(data.time);
                                    }
                                    if (diem.id === item.id && data.photo) {
                                      diem.photo = data.photo;
                                      console.log(data.photo);
                                    }
                                    console.log(diem, 'DIEM HERE');
                                    // (
                                    //     return diem;
                                  });
                                  console.log(mapped, 'MAPPED HERE');

                                  return mapped;
                                });
                                //   setAllDiems((prev) => {
                                //     const copied = [
                                //       ...prev,
                                //       {
                                //         id: res.id,
                                //         title: res.title,
                                //         date: res.date,
                                //         user: currentUser,
                                //         color: res.color,
                                //         events: [],
                                //       },
                                //     ];
                                //     copied.sort(function (a, b) {
                                //       return new Date(a.date) - new Date(b.date);
                                //     });
                                //     return copied;
                                //   });
                                // })
                                // .catch((e) => {
                                //   console.log('error when creating diem', e);
                              });
                            reset({
                              title: '',
                              location: '',
                              time: '',
                              photo: '',
                            });
                          })}
                        >
                          <input
                            {...register('title')}
                            placeholder="Event name..."
                            className="py-2 px-4 rounded"
                          />
                          <input
                            {...register('location')}
                            placeholder="Event location..."
                            className="py-2 px-4 rounded"
                          />

                          <input
                            type="time"
                            className="py-2 px-4 rounded border-none"
                            name="time"
                            {...register('time')}
                          />
                          <input
                            {...register('photo')}
                            placeholder="photo link..."
                            className="py-2 px-4 rounded"
                          />
                          <input
                            // id="submit"
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          />
                        </form>
                      </>
                    )}

                    <button
                      onClick={() => {
                        setCurrentDiem((prev) => {
                          const copy = prev;
                          copy.events = prev.events.filter(
                            (events) => events.id !== item.id
                          );
                          setState(copy.events);

                          return copy;
                        });
                        hooks.deleteEvent(item.id);
                      }}
                      className={styles.deleteDiem}
                    >
                      <Image
                        src={deleteBin}
                        height="20"
                        width="20"
                        alt="delete-bin-image"
                      />
                    </button>
                  </div>
                </Popup>
              </div>
            </>
          ))}
        </ReactSortable>
      ) : (
        'Currently no events'
      )}
    </>
  );
}

export default DisplayEvents;
