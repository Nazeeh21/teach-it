import React from 'react'

const EgImages = () => (
  <div className="flex justify-center items-center w-full">
    <img
      className="w-6/12 lg:mx-6 xl:mx-10"
      src="/ena-entre-1.png"
      alt="ena-entre-1"
    />
    <div className="w-4/12 flex-col">
      <img
        className="p-2 lg:m-2 xl:m-4 xl:my-10 lg:p-0 lg:w-10/12"
        src="/ena-entre-2.png"
        alt="ena-entre-2"
      />
      <img
        className="p-2 lg:m-2 xl:m-4 xl:my-10 lg:p-0 lg:w-10/12"
        src="/ena-entre-3.png"
        alt="ena-entre-3"
      />
    </div>
    <img className="w-2/12 lg:m-3" src="/ena-entre-4.png" alt="ena-entre-4" />
  </div>
)

export default EgImages
