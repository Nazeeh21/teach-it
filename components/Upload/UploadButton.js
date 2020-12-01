import axios from 'axios'
import React, { useState } from 'react'
import { SecondaryButton } from '../Buttons/Index'

const UploadButton = ({ text, footerText, imageInputChangeHandler }) => {
  // const [file, setFile] = useState()

  const handleClick = () => {
    document.getElementById('upload-input').click()
  }

  // const inputChangeHandler = (event) => {
  //   // setFile(event.target.files[0])

  //   // console.log('Uploaded Image', fd)
  //   const fileData = event.target.files[0]
  //   // console.log(fileData.name)
  //   setFile(fileData)

  //   // console.log(fd)
  // }

  // const uploadCLickHandler = async () => {
  //   const fd = new FormData()
  //   fd.append('image', file, file.name)

  //   const res = await axios.post('http://34.122.42.109/api/v1/service/44/media/', fd, {
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
      <input
        id="upload-input"
        className="hidden"
        type="file"
        // value={file}
        onChange={(event) => {
          const data = event.target.files[0]
          console.log('in Upload Button', data)
          // console.log('inUpload Button', URL.createObjectURL(data))
          const fd = new FormData()
          fd.append('image', data, data.name)
          imageInputChangeHandler(fd)
          // imageInputChangeHandler(URL.createObjectURL(data))
        }}
      />
      {/* <SecondaryButton label="Upload" clickHandler={uploadCLickHandler} /> */}
    </React.Fragment>
  )
}

export default UploadButton
