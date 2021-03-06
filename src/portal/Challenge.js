import React, { useState } from "react";
import ReactDOM from "react-dom";

let index = 1;
export default function Challenge() {
  const [messages, setMessages] = useState([]);

  const handleAdd = () => {
    const id = Date.now();
    setMessages([
      ...messages,
      {
        desc: "sample " + index++,
        id,
      },
    ]);
    setTimeout(() => {
      setMessages((currentMessages) => {
        const targetIndex = currentMessages.findIndex((i) => i.id === id);
        const newMessages = [...currentMessages];
        newMessages.splice(targetIndex, 1);
        return newMessages;
      });
    }, 1000);
  };

  return (
    <>
      <button onClick={handleAdd}>add</button>
      {messages.map((m) =>
        ReactDOM.createPortal(
          <p key={m.id}>{m.desc}</p>,
          document.getElementById("moon")
        )
      )}
    </>
  );
}
