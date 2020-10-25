import React, { FC } from 'react';
import './MessageCard.css';

export type Message = {
  id: string;
  // authorId: number;
  body: string;
  createdAt: Date;
};

type Props = {
  message: Message;
};

const MessageCard: FC<Props> = ({ message }) => (
  <div className="message-card">
    <p>{message.id}</p>
    <p>{message.body}</p>
    <p>{message.createdAt.toDateString()}</p>
  </div>
);

export default MessageCard;
