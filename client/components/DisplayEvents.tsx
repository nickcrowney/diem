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
  useEffect(() => {}, [state]);

  const clickedEvent = (item) => {};
  const removeEvent = (id) => {
<<<<<<< HEAD
    console.log("remove event");
=======
    console.log('remove event');
>>>>>>> d4839f015f882463a5c9a4583e74c77e2d522cbc
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
                      {/* <Image
                        src={deleteBin}
                        height="20"
                        width="20"
                        alt="delete-bin-image"
                      /> */}
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
                    <button
                      onClick={() => {
                        setCurrentDiem((prev) => {
                          const copy = prev;
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
