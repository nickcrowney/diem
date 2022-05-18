import React, { useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import styles from '../styles/Home.module.css';
import hooks from '../services/ApiServices';
import deleteBin from '../public/deleteBin.svg';
import Image from 'next/image';
import Popup from 'reactjs-popup';

interface ItemType {
  id: number;
  name: string;
}
function DisplayEvents({ currentDiem, setCurrentDiem, state, setState }) {
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
                      <div key={item.id} onClick={() => clickedEvent(item)}>
                        {item.title}
                        {''}
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
                    <div>Location:</div>
                    <div>Time:</div>
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
