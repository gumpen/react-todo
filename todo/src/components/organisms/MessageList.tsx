import React, { FC } from 'react';
import MessageCard, { Message } from '../molecules/MessageCard';
import './MessageList.css';

type Props = {
  messages: Message[];
};

const MessageList: FC<Props> = (props) => (
  <div className="message-list">
    {props.messages.map((message) => (
      <MessageCard message={message} />
    ))}
  </div>
);

export default MessageList;
