import React, { FC, useEffect, useState } from 'react';
import { Message } from '../components/molecules/MessageCard';
import MessageList from '../components/organisms/MessageList';
import MessageInput from '../components/molecules/MessageInput';
import './Inbox.css';

const Inbox: FC = () => {
  // const initialMessageList: Message[] = [
  //   {
  //     id: 'asdgada',
  //     body: '最初のメッセージ！',
  //     createdAt: new Date(2020, 9, 15, 12, 30, 30),
  //   },
  //   {
  //     id: 'gadiedd',
  //     body: '2個目のメッセージ！',
  //     createdAt: new Date(2020, 9, 15, 12, 35, 30),
  //   },
  // ];

  // const [messageList, setMessageList] = useState<Message[]>(initialMessageList);
  const [messageList, setMessageList] = useState<Message[]>([]);

  const fetchMessage = () => {
    fetch('http://localhost:8080/messages', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        const list = response.map((item: any) => {
          return {
            id: item.id,
            body: item.body,
            createdAt: new Date(item.created_at),
          };
        });
        setMessageList(list);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  const addMessage = (newMessageText: string) => {
    const data = { body: newMessageText };
    fetch('http://localhost:8080/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json)
      .then(() => fetchMessage());
  };

  return (
    <div className="inbox">
      <MessageList messages={messageList} />
      <MessageInput onSubmit={addMessage} />
    </div>
  );
};

export default Inbox;
