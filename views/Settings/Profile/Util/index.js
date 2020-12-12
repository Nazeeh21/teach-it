import React from 'react'
import Toggle from '../../../../components/Toggle'
import UploadButton from '../../../../components/Upload/UploadButton'
import loremIpsum from '../../../../utility/loremIpsum'

const CrossButton = ({ clickHandler, index }) => (
  <div
    style={{
      border: '3px solid white',
      position: 'relative',
      left: '80%',
      bottom: '6%',
    }}
    onClick={() => clickHandler(index)}
    className="cursor-pointer rounded-full w-4/12 bg-red flex text-white"
  >
    <div className="m-auto">x</div>
  </div>
)

const UploadImageAndVideo = ({ src, cancelClickHandler, index }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: 'full',
        height: 'full',
      }}
      className="w-auto max-w-9/12 h-full rounded-lg mr-6"
    >
      <CrossButton clickHandler={cancelClickHandler} index={index} />
    </div>
  )
}

export const DisplayCertificates = ({ src }) => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${src})`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      //   // width: 'full',
      //   // height: 'full',
      // }}
      // className="w-2/12 max-w-3/12 h-24 mb-2 inline-block rounded-lg mr-6"
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: 'full',
        // height: 'full',
      }}
      // className="w-auto max-w-9/12 h-full min-h-24 rounded-lg mr-6"
      className="w-auto max-w-9/12 h-24 mb-2 inline-block rounded-lg mr-6"
    >
      <CrossButton clickHandler={() => {}} />
    </div>
  )
}
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

export const Upload = ({
  label,
  files,
  imageInputChangeHandler,
  cancelClickHandler,
  fetchedCertificates,
}) => {
  console.log('In Upload ', files)
  files.map((data) => console.log('InUpload', data.forPreview))
  return (
    <React.Fragment>
      <div className="my-10">
        <p className="text-xl my-2">{label}</p>
        <p className="w-full text-sm text-darkGrey">{loremIpsum}</p>
      </div>
      <div className="p-2 bg-lightGrey rounded grid grid-cols-5 items-center">
        <div>
          <UploadButton imageInputChangeHandler={imageInputChangeHandler} />
        </div>
        {fetchedCertificates.map((data, index) => (
          <DisplayCertificates key={index} src={data} />
        ))}
        {files.map((data, index) => (
          <UploadImageAndVideo
            key={index}
            src={data.forPreview}
            index={index}
            cancelClickHandler={cancelClickHandler}
          />
        ))}
        {/* {UploadImageAndVideo}
      {UploadImageAndVideo}
      {UploadImageAndVideo}
      {UploadImageAndVideo} */}
      </div>
    </React.Fragment>
  )
}

export const Clickable = ({ children, onClick }) => {
  return (
    <p className="text-secondary underline cursor-pointer" onClick={onClick}>
      {children}
    </p>
  )
}
