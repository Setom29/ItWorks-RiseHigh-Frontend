import React, { useState } from "react";
import Conversation from "./Conversation";
import List from "./List";

export default function Exercise2() {
  const [chat, setChat] = useState({
    displayConversation: null,
    conversations: [
      {
        with: "Laura",
        convo: [
          { text: "Hi", sender: "self" },
          { text: "You there?", sender: "self" },
          { text: "Yeah, hi, what's up?", sender: "other" },
        ],
      },
      {
        with: "Dad",
        convo: [
          { text: "Have you finished your school work yet?", sender: "other" },
          { text: "Yes.", sender: "self" },
          { text: "What do you mean, yes?", sender: "other" },
          { text: "??", sender: "self" },
        ],
      },
      {
        with: "Shoobert",
        convo: [
          { text: "Shoobert!!!", sender: "self" },
          { text: "Dude!!!!!!!!", sender: "other" },
          { text: "Shooooooooo BERT!", sender: "self" },
          { text: "You're my best friend", sender: "other" },
          { text: "No, *you're* my best friend", sender: "self" },
        ],
      },
    ],
  });

  function displayConvo (name){
    const newChat = {...chat}
    newChat.displayConversation = name;
    setChat(newChat)

  }

  return (
    <>

      {chat.displayConversation === null ? (
        <List parentCallback={displayConvo} contacts={chat.conversations.map((el) => el.with)} />
      ) : (
        <Conversation 

        messages={
            chat.conversations.find(
              (el) => el.with === chat.displayConversation
            ).convo
          }
        name={chat.displayConversation}
        parentCallback={displayConvo}
        />
      )}
    </>
  );
}
