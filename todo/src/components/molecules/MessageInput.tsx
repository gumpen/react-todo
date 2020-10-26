import React, { FC, useState } from 'react';

type Props = {
  onSubmit: (submitText: string) => void;
};

const MessageInput: FC<Props> = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'input':
        setInput(event.target.value);
        break;
      default:
        console.log('key not found');
    }
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    props.onSubmit(input);
  };
  return (
    <div>
      <input
        type="text"
        name="input"
        value={input}
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit} />
    </div>
  );
};

export default MessageInput;
