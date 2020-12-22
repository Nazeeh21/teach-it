import React, { useState } from 'react'
import BackDrop from '../../../../components/Backdrop'
import { SecondaryButton } from '../../../../components/Buttons/Index'
import UploadButton from '../../../../components/Upload/UploadButton'
import { Label } from '../Util'

const CrossButton = ({ clickHandler }) => (
  <div
    style={{
      border: '3px solid white',
      position: 'relative',
      left: '80%',
      bottom: '6%',
    }}
    onClick={clickHandler}
    className="cursor-pointer rounded-full w-4/12 bg-red flex text-white"
  >
    <div className="m-auto">x</div>
  </div>
)

const UploadImageAndVideo = ({ src, cancelClickHandler }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: 'full',
        height: 'full',
      }}
      className="w-6/12 md:w-5/12 max-w-9/12 h-24 rounded-lg mr-6"
    >
      <CrossButton clickHandler={cancelClickHandler} />
    </div>
  )
}

const ChangeAvatarModal = ({
  show,
  backdropClickHandler,
  saveButtonClickHandler,
}) => {
  const [file, setFile] = useState()
  const imageChangeHandler = (file) => {
    setFile(file)
  }

  const removeImageHandler = () => {
    setFile(null)
  }
  return (
    <React.Fragment>
      <BackDrop show={show} clicked={backdropClickHandler} />
      <div
        style={{
          zIndex: '100',
          // marginTop: '10rem',
          // marginRight: '25rem',
          top: '10%',
          right: '25%',
          borderBottomLeftRadius: '1rem',
          borderTopLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
          borderTopRightRadius: '1rem',
          opacity: show ? '1' : '0',
        }}
        className="absolute bg-white w-8/12 md:w-5/12 lg:w-3/12 xl:w-3/12 h-auto pt-4 pl-6 pr-2 pb-4 "
      >
        <div className="flex justify-center">
          <Label>Upload Avatar</Label>
        </div>
        {!file ? (
          <div className="flex justify-center md:-mr-4">
            <UploadButton imageInputChangeHandler={imageChangeHandler} />
          </div>
        ) : (
          <div className="flex justify-center -mr-4">
            {/* {console.log('Logging uploaded avatar', file.forPreview)} */}
            <UploadImageAndVideo
              src={file.forPreview}
              cancelClickHandler={removeImageHandler}
            />
          </div>
        )}

        <div className="w-10/12 lg:w-6/12 mt-4 mx-auto">
          <SecondaryButton
            disabled={!file}
            label="Save"
            clickHandler={() => saveButtonClickHandler(file)}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ChangeAvatarModal
