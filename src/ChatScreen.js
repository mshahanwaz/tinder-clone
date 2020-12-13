import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Amber Heard",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Amber_Heard_%2843723454772%29.jpg",
      message: "Whats up ☻",
    },
    {
      name: "Amber Heard",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Amber_Heard_%2843723454772%29.jpg",
      message: "Hello will you call me here?",
    },
    {
      message: "Yeah of course",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH AMBER ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text"
          />
          <button onClick={handleSend} className="chatScreen__button">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
