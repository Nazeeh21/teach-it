import React from 'react'
import { useSelector } from 'react-redux'
import { PrimaryButton } from '../../components/Buttons/Index'
import UploadButton from '../../components/Upload/UploadButton'
import LayoutProvider from '../../layout/LayoutProvider'
import { uploadImage } from '../../services/services'
// import { UploadImageAndVideo } from '../../views/Settings/Profile/Util'

const { useState, useEffect } = React

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

const UploadImageAndVideo = ({ src, cancelClickHandler, index }) => (
  <div
    // style={{ backgroundImage: `url('images&videos/1.png')` }}
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

const Index = () => {
  const profileId = useSelector((state) => state.app.currentProfile)
  const token = useSelector((state) => state.auth.token)

  const [files, setFiles] = useState([])

  const removeImageHandler = (index) => {
    const newFile = [...files]
    newFile.splice(index, 1)
    setFiles(newFile)
  }

  const handleUpload = async () => {
    await uploadImage(files[0].forUpload, profileId, token)
  }

  return (
    <LayoutProvider>
      <UploadButton
        imageInputChangeHandler={(data) => {
          const newFiles = [...files]
          newFiles.push(data)
          setFiles(newFiles)
        }}
      />
      {files.map((imageData, index) => (
        <UploadImageAndVideo
          key={index}
          src={imageData.forPreview}
          index={index}
          cancelClickHandler={removeImageHandler}
        />
      ))}
      <PrimaryButton label="Upload" clickHandler={handleUpload} />
    </LayoutProvider>
  )
}

export default Index
