import React from 'react'

const NavItem = ({ label, active = false }) => {
  return (
    <div
      className={`bg-${
        active ? 'highlight' : 'none'
      } text-md text-primary pl-12 pr-4 pt-4 pb-4 hover:bg-highlight cursor-pointer`}
    >
      <p>{label}</p>
    </div>
  )
};

export default NavItem;
