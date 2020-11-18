import React from 'react'

const New = (
  <div
    style={{
      backgroundImage: 'linear-gradient(180deg, #B620E0 0%, #6236FF 100%)',
    }}
    className="inline-block text-xs rounded-full bg-black text-white px-5 py-1"
  >
    NEW
  </div>
)

const BottomNavbar = () => (
  <div className="bg-white py-16">
    <div className="flex flex-col md:flex-row justify-center lg:px-10 font-medium ">
      <div className="w-full ml-5 md:w-3/12 md:ml-10 flex flex-col text-lg lg:ml-16 xl:ml-32">
        <p className="font-semibold text-2xl md:mb-8">Overview</p>
        <a className="mt-5" href="/">
          Home
        </a>
        <a className="mt-5" href="/">
          About us
        </a>
        <div className="mt-5">
          <a href="/">Win a Macbook!</a> {New}
        </div>
        <a className="mt-5" href="/">
          Contact us
        </a>
      </div>
      <div className="w-full ml-5 md:w-3/12 md:ml-10 flex flex-col text-lg lg:ml-16 xl:ml-32">
        <p className="font-semibold mt-8 text-xl md:mb-8 md:mt-0">Legal</p>
        <a className="mt-5" href="/">
          Privacy Policy
        </a>
        <a className="mt-5" href="/">
          Terms of use
        </a>
        <a className="mt-5" href="/">
          DMCA
        </a>
      </div>
      <div className="w-full ml-5 md:w-6/12 md:mr-8 flex flex-col text-lg xl:ml-48 xl:mr-10">
        <p className="font-semibold mt-8 text-xl md:mb-8 md:mt-0">Updates</p>
        <p className="mt-5">
          Sign up for our FREE newsletter and get daily updates on services,
          offers & promotions.
        </p>
        <div className="w-full pr-2 md:pr-0 flex mt-5">
          <div className="w-8/12 shadow rounded-l-md pt-2 md:pl-2 lg:pl-3 pb-2">
            <p style={{ color: '#4968FF' }} className="text-xs font-semibold">
              Email
            </p>
            <input
              type="email"
              placeholder="your@email.com"
              onChange={(e) => e.target.value}
            />
          </div>
          <button
            style={{ backgroundColor: '#4968FF' }}
            className="w-4/12 rounded-r-md items-center flex"
          >
            <p className="py-2 m-auto text-white">Sign up</p>
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default BottomNavbar
