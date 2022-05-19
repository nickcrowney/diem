import styles from "../components/Message.module.css";
import hooks from "../services/ApiServices";
import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../contexts/Context";

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
  const { loginInfo } = useContext(LoginContext);
  return (
    <>
      {loginInfo && loginInfo.email === props.el.author && (
        <div className={styles.message_container_right}>
          <>
            <div className={styles.content_right}>{props.el.content}</div>
            <div className={styles.name_right}>{props.el.name}</div>
          </>
        </div>
      )}
      {loginInfo && loginInfo.email !== props.el.author && (
        <>
          <div className={styles.message_container_left}>
            <div className={styles.content_left}>{props.el.content}</div>
            <div className={styles.name_left}>{props.el.name}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Message;
