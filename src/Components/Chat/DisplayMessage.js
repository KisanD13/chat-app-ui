import React, { Fragment } from 'react';

const DisplayMessage = ({ messages, setMessages }) => {
  return (
    <Fragment>
      {messages.map((message) => {
        return (
          <div className='messageinfo' key={message.id}>
            <div>
              <h4>{message.info}</h4>
              <span>{message.date.toLocaleDateString()}</span>
              <span>{message.date.toLocaleTimeString()}</span>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default DisplayMessage;
