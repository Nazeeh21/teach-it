import React from 'react'

const UploadButton = ({ text, footerText, imageInputChangeHandler }) => {
  const handleClick = () => {
    document.getElementById('uploadInput').click()
  }

  return (
    <React.Fragment>
      <img
        onClick={handleClick}
        src="/plus.png"
        alt="Upload button"
        className="cursor-pointer border-secondary border-2 border-dashed rounded-md p-6 m-2 w-24"
      />
      <p className="m-1 text-serviceCardTitle">{text}</p>
      <p className="m-1 text-serviceCardDescription text-darkGrey">
        {footerText}
      </p>
      <input
        id="uploadInput"
        className="hidden"
        type="file"
        name="doc"
        // value={file}
        onChange={(event) => {
          const file = event.target.files[0]
          console.log('in Upload Button', file)
          console.log('in Upload Button for preview', URL.createObjectURL(file))

          // const formData = new FormData()
          // console.log('Before appending', formData)

          // formData.append('doc', file)
          // console.log('FormData in Upload Button After appending', formData)

          // let imageData
          // for (var pair of formData.entries()) {
          //   console.log(pair[0] + ', ' + pair[1])
          //   imageData = pair[1]
          //   console.log('imageData in Uploadjs ', imageData)
          // }

          imageInputChangeHandler({
            forUpload: file,
            forPreview: URL.createObjectURL(file),
          })
        }}
      />
    </React.Fragment>
  )
}

export default UploadButton
