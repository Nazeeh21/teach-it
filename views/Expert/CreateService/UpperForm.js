import React, { useEffect, useState } from 'react'
import UploadButton from '../../../components/Upload/UploadButton'
import ServiceTypeCard from './ServiceTypeCard'

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

const UpperForm = ({
  uploadedMedia,
  liveType,
  type,
  typeChangedHandler,
  title,
  description,
  titleChangedHandler,
  descriptionChangedHandler,
  imageInputChangeHandler,
  imageDataForPreview,
  imageCrossHandler,
}) => {
  const [liveServiceType, setServiceType] = useState(null)

  return (
    <div className="w-full font-medium">
      {type === 'live' && (
        <React.Fragment>
          <p className="text-lg my-2">Live Service type</p>
          <div className="w-full grid grid-cols-2 gap-5 mb-6">
            <ServiceTypeCard
              label="Video and audio"
              desc="learners can see and hear you"
              // active={liveServiceType === 0}
              active={liveType == 'video'}
              clickHandler={() => {
                typeChangedHandler('video')
                setServiceType(0)
              }}
              noIcon
            />
            <ServiceTypeCard
              label="Audio only"
              desc="learners can only hear your voice"
              // active={liveServiceType === 1}
              active={liveType == 'audio'}
              clickHandler={() => {
                typeChangedHandler('audio')
                setServiceType(1)
              }}
              noIcon
            />
          </div>
        </React.Fragment>
      )}
      <div className="my-10">
        <p className="text-lg my-2">Title</p>
        <input
          value={title}
          className="rounded w-full p-2 text-sm bg-lightGrey"
          onChange={(e) => {
            titleChangedHandler(e.target.value)
          }}
        />
      </div>
      <div className="my-10">
        <p className="text-lg my-2">Description</p>
        <textarea
          value={description}
          className="rounded w-full p-2 text-sm bg-lightGrey h-32"
          onChange={(e) => {
            descriptionChangedHandler(e.target.value)
          }}
        />
      </div>
      <div className="my-10">
        <p className="text-lg my-2">Images and videos</p>
        <p className="w-full text-sm text-darkGrey">
          Upload some images and videos showcasing your skills (max 5)
        </p>
      </div>
      <div className="p-2 bg-lightGrey rounded grid grid-cols-5 items-center">
        <div>
          <UploadButton imageInputChangeHandler={imageInputChangeHandler} />
        </div>
        {uploadedMedia &&
          uploadedMedia.length !== 0 &&
          uploadedMedia.map((media, index) => (
            <UploadImageAndVideo
              key={index}
              src={media}
              index={index}
              cancelClickHandler={() => {}}
            />
          ))}
        {imageDataForPreview.map((imageData, index) => (
          <UploadImageAndVideo
            key={index}
            src={imageData.forPreview}
            index={index}
            cancelClickHandler={imageCrossHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default UpperForm
