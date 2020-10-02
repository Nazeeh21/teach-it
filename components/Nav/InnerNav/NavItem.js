import React from 'react'
import { useRouter } from 'next/router'

const NavItem = ({ label, active = false, link }) => {
  const router = useRouter()
  
  return (
    <div
      onClick={() => router.push(link)}
      className={`bg-${
        active ? 'highlight' : 'none'
      } text-md text-primary pl-12 pr-4 pt-4 pb-4 hover:bg-highlight cursor-pointer`}
    >
      <p>{label}</p>
    </div>
  )
};

export default NavItem;
