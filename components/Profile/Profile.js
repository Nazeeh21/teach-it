import React from "react";
import Avatar from "../Images/Avatar";
import {v4 as uuid} from 'uuid'
import loremIpsum from "../../utility/loremIpsum";

const Profile = ({
  country = 'India',
  languages = ['English', 'Gujarati', 'Hindi'],
  name = 'Nazeeh Vahora',
  heading = 'Best guitar trainer in Asia',
  subHeading = loremIpsum,
  online = true,
}) => (
  <div className="w-full m-2 flex flex-row">
    <div className="w-3/12 mr-8 justify-center">
      {online && (
        <div className="pr-5 items-center flex flex-row bg-highlight z-50 absolute rounded-full">
          <div
            style={{ backgroundColor: "lightGreen" }}
            className="m-2 w-2 h-2 rounded-full"
          />
          Online
        </div>
      )}

      <Avatar
        purpose="isForProfile"
        src="/nazeeh_profile.jpg"
        alt="profile_img"
      />

      <div className=" mt-6 text-center">
        <p className="text-xl">{country}</p>
        {languages.map((language) => (
          <span key={() => uuid()} className="text-xs pt-0 text-darkGrey">{language + " "}</span>
        ))}
      </div>
    </div>

    <div className="w-8/12 flex flex-col">
      <p className="text-3xl mt-4">{name}</p>
      <p className="text-lg font-bold mt-2 text-darkGrey">{heading}</p>
      <p className="text-md mt-2 text-darkGrey">{subHeading}</p>
    </div>
  </div>
);

export default Profile;
