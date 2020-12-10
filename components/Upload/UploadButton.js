import axios from 'axios'
import React, { useState } from 'react'
import { SecondaryButton } from '../Buttons/Index'

const UploadButton = ({ text, footerText, imageInputChangeHandler }) => {
  // const [file, setFile] = useState()

  const handleClick = () => {
    document.getElementById('uploadInput').click()
  }

  // const inputChangeHandler = (event) => {
  //   // setFile(event.target.files[0])

  //   // console.log('Uploaded Image', formData)
  //   const imageData = event.target.files[0]
  //   // console.log(imageData.name)
  //   setFile(imageData)

  //   // console.log(formData)
  // }

  // const uploadCLickHandler = async () => {
  //   const formData = new FormData()
  //   formData.append('image', file, file.name)

  //   const res = await axios.post('http://34.122.42.109/api/v1/service/44/media/', formData, {
  //     headers: {
  //       Authorization: `Token ${localStorage.getItem('token')}`,
  //       'X-Profile-ID': 2,
  //     },
  //   })

  //   console.log(res)
  // }

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
      {/* <form encType="multipart/form-data" action=""> */}
      <input
        id="uploadInput"
        className="hidden"
        // encType="multipart/form-data"
        type="file"
        name="doc"
        // value={file}
        onChange={(event) => {
          const data = event.target.files[0]
          console.log('in Upload Button', data)
          console.log('in Upload Button for preview', URL.createObjectURL(data))

          const formData = new FormData()
          console.log('Before appending', formData)

          // console.log('In Upload Button', document.getElementById("uploadInput").files[0])

          formData.append('doc', data)
          console.log('FormData in Upload Button After appending', formData)

          let imageData
          for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1])
            imageData = pair[1]
            console.log('imageData in Uploadjs ', imageData)
          }

          imageInputChangeHandler({
            forUpload: imageData,
            forPreview: URL.createObjectURL(data),
          })
          // imageInputChangeHandler(URL.createObjectURL(data))
        }}
      />
      {/* </form> */}

      {/* <SecondaryButton label="Upload" clickHandler={uploadCLickHandler} /> */}
    </React.Fragment>
  )
}

export default UploadButton
