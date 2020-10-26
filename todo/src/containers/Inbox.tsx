import React, { FC, useState } from 'react';
import { Message } from '../components/molecules/MessageCard';
import MessageList from '../components/organisms/MessageList';
import MessageInput from '../components/molecules/MessageInput';
import './Inbox.css';

const Inbox: FC = () => {
  const initialMessageList: Message[] = [
    {
      id: 'asdgada',
      body: '最初のメッセージ！',
      createdAt: new Date(2020, 9, 15, 12, 30, 30),
    },
    {
      id: 'gadiedd',
      body: '2個目のメッセージ！',
      createdAt: new Date(2020, 9, 15, 12, 35, 30),
    },
  ];

  const [messageList, setMessageList] = useState<Message[]>(initialMessageList);

  const addMessage = (newMessageText: string) => {
    const newMessage: Message = {
      id: 'newwwww',
      body: newMessageText,
      createdAt: new Date(),
    };
    setMessageList((prev: Message[]) => prev.concat(newMessage));
  };

  return (
    <div className="inbox">
      <MessageList messages={messageList} />
      <MessageInput onSubmit={addMessage} />
    </div>
  );
};

export default Inbox;
