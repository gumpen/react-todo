import React, { FC } from 'react';
import { Message } from '../components/molecules/MessageCard';
import MessageList from '../components/organisms/MessageList';
import './Inbox.css';

const Inbox: FC = () => {
  const messageList: Message[] = [
    {
      id: 'asdgada',
      body: '最初のメッセージ！',
      createdAt: new Date(2020, 10, 15, 12, 30, 30),
    },
    {
      id: 'gadiedd',
      body: '2個目のメッセージ！',
      createdAt: new Date(2020, 10, 15, 12, 35, 30),
    },
  ];

  return (
    <div className="inbox">
      <MessageList messages={messageList} />
    </div>
  );
};

export default Inbox;
