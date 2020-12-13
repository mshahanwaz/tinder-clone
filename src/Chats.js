import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div>
      <Chat
        name="Amber Heard"
        message="Hey!"
        timestamp="35 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/4/4c/Amber_Heard_%2843723454772%29.jpg"
      />
      <Chat
        name="Tony Stark"
        message="Hey!"
        timestamp="35 minutes ago"
        profilePic="https://img.cinemablend.com/filter:scale/quill/d/9/5/a/c/9/d95ac9d6f0acd56e12b9452301c763cd1aeffe51.jpg?mw=600"
      />
      <Chat
        name="Nora Fatehi"
        message="Hey!"
        timestamp="35 minutes ago"
        profilePic="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/04/nora-1587902074.jpg"
      />
    </div>
  );
}

export default Chats;
