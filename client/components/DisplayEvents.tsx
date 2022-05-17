import React, { FC, useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styles from "../styles/Home.module.css";
import hooks from "../services/ApiServices";
import deleteBin from "../public/deleteBin.svg";
import Image from "next/image";

interface ItemType {
  id: number;
  name: string;
}
<<<<<<< HEAD
function DisplayEvents({ currentDiem }) {
  console.log(currentDiem.events, "EVENTSSSS");
  const [state, setState] = useState<ItemType[]>([
    // currentDiem.events
    //   [
    // { id: 1, name: 'pre-drinks' },
    // { id: 2, name: 'match time' },
    // { id: 3, name: 'consolation drink' },
    // ]
    // currentDiem.events
    //   [
    //
    // ]
  ]);
=======
function DisplayEvents({ currentDiem, state, setState }) {
  console.log(currentDiem.events, 'EVENTSSSS');
  // const [state, setState] = useState<ItemType[]>([]);
>>>>>>> a94eb8c8150b5bf8accefaae2903b2bfc7ca0a4b

  useEffect(() => {
    console.log(currentDiem.events, "MAPPABLE");
    currentDiem.events && setState(currentDiem.events);
  }, [currentDiem.events]);
  useEffect(() => {}, [currentDiem]);

  const clickedEvent = (item) => {
    console.log("clicked event");
    console.log(item.title, "title event");
    console.log(item.id, "event ID");
  };
  const removeEvent = (id) => {
    console.log("remove event");
    // hooks.deleteEvent(id);
  };
  return (
    <>
      {/* {mappable[0].title} */}
      {currentDiem.events && state.length ? (
        <ReactSortable list={state} setList={setState}>
          {/* {currentDiem &&
          currentDiem.events &&
          currentDiem.events.map((el) => {
            return (
              <ul key={el.id}>
              <div>
              {el.title}
              {el.location ? ' at ' : ''}{' '}
              {el.location ? el.location + '. ' : ''}
              {el.time ? `Start time: ${el.time}` : ''}
              </div>
              </ul>
              );
            })} */}
          {state.map((item) => (
            <>
              <div className={styles.events}>
                <div key={item.id} onClick={() => clickedEvent(item)}>
                  {item.title}
                  {""}
                </div>
                <div onClick={() => removeEvent(item.id)}>
                  <Image src={deleteBin} height="20" width="20" />
                </div>
              </div>
            </>
          ))}
        </ReactSortable>
      ) : (
        "Currently no events"
      )}
    </>
  );
}

export default DisplayEvents;
// Original: https://github.com/chenglou/react-motion/tree/master/demos/demo8-draggable-list

// import { render } from 'react-dom';
// import React, { useRef } from 'react';
// import clamp from 'lodash-es/clamp';
// import swap from 'lodash-move';
// import { useGesture } from 'react-with-gesture';
// import { useSprings, animated, interpolate } from 'react-spring';
// import './styles.css';

// // WHEN dragging, this function will be fed with all arguments.
// // OTHERWISE, only the list order is relevant.
// const fn = (order, down, originalIndex, curIndex, y) => (index) =>
//   down && index === originalIndex
//     ? /*
//       No need to transition the following properties:
//       - z-index, the elevation of the item related to the root of the view; it should pop straight up to 1, from 0.
//       - y, the translated distance from the top; it's already being updated dinamically, smoothly, from react-gesture.
//       Thus immediate returns `true` for both.
//     */
//       {
//         y: curIndex * 100 + y,
//         scale: 1.1,
//         zIndex: '1',
//         shadow: 15,
//         immediate: (n) => n === 'y' || n === 'zIndex',
//       }
//     : {
//         y: order.indexOf(index) * 100,
//         scale: 1,
//         zIndex: '0',
//         shadow: 1,
//         immediate: false,
//       };

// function DraggableList({ items }) {
//   const order = useRef(items.map((_, index) => index)); // Store indices as a local ref, this represents the item order
//   /*
//     Curries the default order for the initial, "rested" list state.
//     Only the order array is relevant when the items aren't being dragged, thus
//     the other arguments from fn don't need to be supplied initially.
//   */
//   const [springs, setSprings] = useSprings(items.length, fn(order.current));
//   const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
//     const curIndex = order.current.indexOf(originalIndex);
//     const curRow = clamp(
//       Math.round((curIndex * 100 + y) / 100),
//       0,
//       items.length - 1
//     );
//     const newOrder = swap(order.current, curIndex, curRow);
//     /*
//       Curry all variables needed for the truthy clause of the ternary expression from fn,
//       so that new objects are fed to the springs without triggering a re-render.
//     */
//     setSprings(fn(newOrder, down, originalIndex, curIndex, y));
//     // Settles the new order on the end of the drag gesture (when down is false)
//     if (!down) order.current = newOrder;
//   });
//   return (
//     <div class="content" style={{ height: items.length * 100 }}>
//       {springs.map(({ zIndex, shadow, y, scale }, i) => (
//         <animated.div
//           {...bind(i)}
//           key={i}
//           style={{
//             zIndex,
//             // boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
//             transform: interpolate(
//               [y, scale],
//               (y, s) => `translate3d(0,${y}px,0) scale(${s})`
//             ),
//           }}
//           children={items[i]}
//         />
//       ))}
//     </div>
//   );
// }

// render(
//   <DraggableList items={'Lorem ipsum dolor sit'.split(' ')} />,
//   document.getElementById('root')
// );
