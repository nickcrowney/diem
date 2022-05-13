const Message: React.FunctionComponent = (props) => {
  return (
    <div className="messageContainer">
      <div>{props.message.content}</div>
      <div>{props.message.author}</div>
      <div>{props.message.timestamp}</div>
    </div>
  );
};

export default Message;
