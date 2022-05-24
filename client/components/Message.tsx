import styles from '../components/Message.module.css';
import { useContext } from 'react';
import { LoginContext } from '../contexts/Context';

const Message: React.FunctionComponent = ({ message }) => {
  const { loginInfo } = useContext(LoginContext);
  return (
    <>
      {loginInfo && loginInfo.email === message.author && (
        <div className={styles.message_container_right}>
          <>
            <div className={styles.content_right}>{message.content}</div>
            <div className={styles.name_right}>{message.name}</div>
          </>
        </div>
      )}
      {loginInfo && loginInfo.email !== message.author && (
        <>
          <div className={styles.message_container_left}>
            <div className={styles.content_left}>{message.content}</div>
            <div className={styles.name_left}>{message.name}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Message;
