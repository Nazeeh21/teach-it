import React from 'react'

const ProfileDropdown = ({ profiles }) => (
  <div
    className="text-lg p-2 w-2/12 m-3 rounded"
    style={{ border: '1px solid #6F6E7B', width: 'fitContent' }}
  >
    <select className="w-full ">
      {profiles.map((profile, index) => {
        return (
          <option key={index} className="m-1 p-3" key={profile} value={profile}>
            {/* <div className='bg-gradient-to-r from-orange-400 via-red-500 to-pink-500'/> */}
            {profile}
          </option>
        )
      })}
    </select>
  </div>
)

export default ProfileDropdown
