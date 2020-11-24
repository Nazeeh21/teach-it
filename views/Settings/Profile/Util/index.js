import React from 'react'
import Toggle from '../../../../components/Toggle'
import UploadButton from '../../../../components/Upload/UploadButton'
import loremIpsum from '../../../../utility/loremIpsum'

export const CrossButton = (
  <div
    style={{
      border: '3px solid white',
      position: 'relative',
      left: '80%',
      bottom: '6%',
    }}
    className="rounded-full w-4/12 bg-red flex text-white"
  >
    <button className="m-auto">x</button>
  </div>
)

export const UploadImageAndVideo = (
  <div
    style={{ backgroundImage: `url('images&videos/1.png')` }}
    className="w-9/12 h-full rounded-lg"
  >
    {CrossButton}
  </div>
)

export const Switch = ({ label }) => (
  <div className="grid grid-cols-2 items-center mt-4">
    <p className="text-lg">{label}</p>
    <div className="justify-self-end">
      <Toggle />
    </div>
  </div>
)

export const Label = ({ children }) => (
  <h3 className="text-xl mb-2 mt-6">{children}</h3>
)

export const Upload = ({ label }) => (
  <React.Fragment>
    <div className="my-10">
      <p className="text-xl my-2">{label}</p>
      <p className="w-full text-sm text-darkGrey">{loremIpsum}</p>
    </div>
    <div className="p-2 bg-lightGrey rounded grid grid-cols-5 items-center">
      <div>
        <UploadButton />
      </div>
      {UploadImageAndVideo}
      {UploadImageAndVideo}
      {UploadImageAndVideo}
      {UploadImageAndVideo}
    </div>
  </React.Fragment>
)

export const Clickable = ({ children, onClick }) => {
  return (
    <p className="text-secondary underline cursor-pointer" onClick={onClick}>
      {children}
    </p>
  )
}
