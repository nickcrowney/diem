import styles from "../components/Message.module.css";
import hooks from "../services/ApiServices";
import { useEffect, useState } from "react";

// const usersHook = () => {
// const [state, setState] = useState();
// useEffect(() => {
//   fetch("http://localhost:4000/users")
//     .then((res) => res.json())
//     .then((res) => setState(res));
// }, []);
// //const data = await response.json();
// // setUsers(data);
// return { state };

const Message: React.FunctionComponent = (props) => {
  return (
    <div className={styles.message_container}>
      <div>{props.el.content}</div>
      <div>{props.el.name}</div>
      <div>{Number(props.el.timestamp)}</div>
    </div>
  );
};

export default Message;
