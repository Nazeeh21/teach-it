import React, { useState } from "react";
import { ChatWindowContact } from "../../components/Chat/ChatWindowContact";
import SearchBar from "../../components/Inputs/SearchBar";
import ChooseService from "./ChooseService/ChooseService";
import {v4 as uuid} from 'uuid'

const ChatWindowData = [
  {
    src: "stock/girl2.jpg",
    name: "Arun",
    active: false,
    time: "5",
    text: "See you soon",
  },
  {
    src: "stock/girl2.jpg",
    name: "Deepak Kumar",
    active: true,
    time: "5",
    text: "See you soon",
    current: "true",
  },
  {
    src: "stock/girl2.jpg",
    name: "John Doe",
    active: false,
    time: "5",
    text: "See you soon",
  },
  {
    src: "stock/girl2.jpg",
    name: "Nisha Sharma",
    active: true,
    time: "5",
    text: "See you soon",
  },
  {
    src: "stock/girl2.jpg",
    name: "Sonia",
    active: true,
    time: "5",
    text: "See you soon",
  },
];

const Contacts = () => {
  const [searchBarOpen, toggleSearch] = useState(false);
  const [query, setQuery] = useState('')

  const [currentContact, setCurrentContact] = useState('')

  const ChatWindowContactClickHandler = (name) => setCurrentContact(name)

  return (
    <div className="w-full">
      <div id="contacts" className="shadow-lg bg-white rounded-lg">
        <div className="grid grid-cols-2 grid-rows-1 py-3 px-3 my-2 items-center">
          <p className="text-darkGrey font-medium text-2xl ">Contacts</p>
          <div className="justify-end flex">
            {/* <input
              className="bg-lightGrey rounded-lg w-11/12 p-2 "
              type="text"
            /> */}
            {searchBarOpen ? (
              <SearchBar value={query} changeHandler={setQuery} bgColor='highlight' />
            ) : (
              <div onClick={() => toggleSearch(true)} className="cursor-pointer h-auto w-1/12 ml-1">
                <img
                  className="w-full h-auto"
                  src="/search.png"
                  alt="search-icon"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full justify-center px-3">
          <select
            style={{ outline: "none" }}
            className="h-10 w-full text-lg rounded-md border-2 border-lightGrey"
          >
            <option label="Sonia" value="sonia" />
            <option label="John" value="john" />
            <option label="Arun" value="arun" />
          </select>
        </div>
        {ChatWindowData.map((data) => (
          <div key={() => uuid()} className="">
            <ChatWindowContact
              clickHandler={ChatWindowContactClickHandler}
              src={data.src}
              name={data.name}
              text={data.text}
              active={data.active}
              // active={activeContact === data.name ? true : false}
              time={data.time}
              current={currentContact === data.name}
              // current='false'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
