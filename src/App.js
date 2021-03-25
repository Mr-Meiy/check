import "./App.css";
import Chatbox from "./chatbox";
import { useState } from "react";

function App() {
  const [contacts, setcontacts] = useState([
    {
      image: "http://emilcarlsson.se/assets/louislitt.png",
      name: "Louis Litt",
      index: "00",
      messages: [
        {
          message: "Hi, how are you ?",
          isLetf: true,
        },
        {
          message: "Hi Good how about you?",
          isLetf: false,
        },
      ],
    },
    {
      image: "http://emilcarlsson.se/assets/harveyspecter.png",
      name: "Matt",
      index: "01",
      messages: [
        {
          message: "can u come with me for la movie ?",
          isLetf: true,
        },
        {
          message: "no i have work.",
          isLetf: false,
        },
      ],
    },
    {
      image: "http://emilcarlsson.se/assets/haroldgunderson.png",
      name: "Dan",
      index: "02",
      messages: [
        {
          message: "Hi, when is u r meeting ?",
          isLetf: true,
        },
        {
          message: "tomorrow!",
          isLetf: false,
        },
      ],
    },
    {
      image: "http://emilcarlsson.se/assets/donnapaulsen.png",
      name: "Kate",
      index: "03",
      messages: [
        {
          message: "what are u doin ?",
          isLetf: true,
        },
        {
          message: "nothing!",
          isLetf: false,
        },
      ],
    },
  ]);
  const [list, getlist] = useState(contacts[0]);

  const [data, setdata] = useState(null);

  let btnchange = function handletext(text) {
    setdata(text.target.value);
  };
  let btnclick = (index) => {
    let messageIndex = index.nativeEvent.path[1].id;
    let currentIndex = messageIndex.substr(1, 1);
    let value = data.toString();
    let i = currentIndex.toString();

    let object = {
      message: value,
      isLetf: false,
    };
    contacts[i].messages.push(object);
    document.getElementById(messageIndex).value = " ";
    setcontacts([...contacts]);
    setdata(null);
  };

  return (
    <>
      <div id="frame">
        <div id="sidepanel">
          <div id="profile">
            <div className="wrap">
              <img
                id="profile-img"
                src="http://emilcarlsson.se/assets/mikeross.png"
                className="online"
                alt=""
              />
              <p>Mike Ross</p>
              <i
                className="fa fa-chevron-down expand-button"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div id="contacts">
            <ul>
              {contacts.map((contact, index) => {
                return (
                  <li
                    className="contact"
                    onClick={() => {
                      getlist(contact);
                    }}
                  >
                    <div className="wrap">
                      <span className="contact-status online"></span>
                      <img src={contact.image} alt="" />
                      <div className="meta">
                        <p className="name">{contact.name}</p>
                        <p className="preview">
                          {
                            contact.messages[contact.messages.length - 1]
                              .message
                          }
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div id="bottom-bar">
            <button id="addcontact">
              <i className="fa fa-user-plus fa-fw" aria-hidden="true"></i>{" "}
              <span>Add contact</span>
            </button>
            <button id="settings">
              <i className="fa fa-cog fa-fw" aria-hidden="true"></i>{" "}
              <span>Settings</span>
            </button>
          </div>
        </div>
        <div className="content">
          <Chatbox
            data={list}
            handletext={btnchange}
            handlesend={btnclick}
          ></Chatbox>
        </div>
      </div>
    </>
  );
}

export default App;
