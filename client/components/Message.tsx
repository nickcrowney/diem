import styles from "../components/Message.module.css";

const Message: React.FunctionComponent = (props) => {
  return (
    <div className="messageContainer">
      <div>{props.el.content}</div>
      <div>{props.el.author}</div>
      <div>{props.el.timestamp}</div>
    </div>
  );
};

export default Message;
