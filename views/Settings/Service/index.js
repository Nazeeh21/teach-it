import React from "react";
import Dropdown from "../../../components/Inputs/Dropdown";
import Toggle from "../../../components/Toggle";
import { PrimaryButton } from "../../../components/Buttons/Index";
import ShowAllButton from "../ShowAllButton";
import User from "../Users";
import NavSwitch from "../../../components/NavSwitch";

const Label = ({ children }) => <h3 className="text-2xl">{children}</h3>;

const SubLabel = ({ children }) => (
  <h3 className="text-xl text-darkGrey mb-6">{children}</h3>
);

const GreyLine = () => (
  <div
    style={{ height: "0.05rem", opacity: "50%" }}
    className="bg-darkGrey w-full"
  />
);

const LargeText = ({ children }) => <h3 className="text-xl">{children}</h3>;

const PaymentText = () => <div className="text-md text-darkGrey">₹ 7468</div>;

const RoleText = () => <div className="text-md text-darkGrey">Admin</div>;

const Service = () => {
  return (
    <div className="w-full">
      <h3 className="text-2xl mb-4">Service settings</h3>
      <div className="bg-white w-full rounded-lg p-8">
        <Label>Session recordings</Label>
        <SubLabel>
          Recordings will be automatically saved and available in the cloud for
          upto 7 days.
        </SubLabel>

        <div className="w-full bg-accentedWhite p-8 grid grid-cols-2 items-center">
          <LargeText>Auto-upload to YouTube</LargeText>
          <div className="justify-self-end">
            <p className="text-secondary text-xl">Not linked</p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-8 mb-4">
          <Label>Manage learners</Label>
          <p className="justify-self-end text-secondary text-xl cursor-pointer">
            Export
          </p>
        </div>

        <div className="grid grid-cols-3 grid-flow-row gap-x-4 gap-y-2 bg-medGrey p-8 justify-evenly mb-8">
          <p className="text-xl">Service</p>
          <p className="text-xl">Payment status</p>
          <p className="text-xl">Age group</p>

          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>

        <div className="w-full bg-lightGrey mt-4 pb-4 mb-6">
          <User src="nazeeh_profile.jpg" name="Arun P" text={<PaymentText />} />
          <GreyLine />
          <User src="nazeeh_profile.jpg" name="Arun P" text={<PaymentText />} />
          <GreyLine />
          <User src="nazeeh_profile.jpg" name="Arun P" text={<PaymentText />} />
          <GreyLine />
          <User src="nazeeh_profile.jpg" name="Arun P" text={<PaymentText />} />
          <ShowAllButton />
        </div>

        <div className="w-full grid grid-cols-2 mt-6">
          <div className="flex items-center gap-4">
            <Label>Delegate Roles</Label>
            <button className="rounded bg-primary text-white py-2 px-6 text-xl">
              + New
            </button>
          </div>

          <NavSwitch
            color1="white"
            color2="white"
            label1="To me"
            label2="To others"
            textColor="primary"
          />
        </div>

        <div className="w-full bg-lightGrey mt-4 pb-4 mb-6">
          <User src="nazeeh_profile.jpg" name="Arun P" text={<RoleText />} />
          <GreyLine />
          <User src="nazeeh_profile.jpg" name="Arun P" text={<RoleText />} />
          <GreyLine />
          <User src="nazeeh_profile.jpg" name="Arun P" text={<RoleText />} />
          <GreyLine />
          <User src="nazeeh_profile.jpg" name="Arun P" text={<RoleText />} />
          <ShowAllButton />
        </div>

        <Label>Accept instant service</Label>
        <SubLabel>
          Learners can request short, one-time services whenever they see you
          online.
        </SubLabel>

        <div className="w-full bg-accentedWhite p-8 grid grid-cols-2 items-center">
          <p className="text-xl">Show full name on profile</p>
          <div className="justify-self-end">
            <Toggle />
          </div>
        </div>

        <div className='w-3/12 mt-6'>
        <PrimaryButton label='Continue' />
        </div>
        
      </div>
    </div>
  );
};

export default Service;
