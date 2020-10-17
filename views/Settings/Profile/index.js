import React, { useEffect, useState } from 'react'
import Toggle from '../../../components/Toggle'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../components/Buttons/Index'
import Input from '../../../components/Inputs/HighlightInput'
import Dropdown from '../../../components/Inputs/Dropdown'
import loremIpsum from '../../../utility/loremIpsum'
import UploadButton from '../../../components/Upload/UploadButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileData, saveProfile, updateData } from '../../../store/actions/settingActions'
import { validate } from '../../../utility/validation'

const CrossButton = (
  <div
    style={{
      border: '3px solid white',
      position: 'relative',
      left: '80%',
      bottom: '6%',
    }}
    className='rounded-full w-4/12 bg-red flex text-white'
  >
    <button className='m-auto'>x</button>
  </div>
)

const UploadImageAndVideo = (
  <div
    style={{ backgroundImage: `url('images&videos/1.png')` }}
    className='w-9/12 h-full rounded-lg'
  >
    {CrossButton}
  </div>
)

const Switch = ({ label }) => (
  <div className='grid grid-cols-2 items-center mt-4'>
    <p className='text-lg'>{label}</p>
    <div className='justify-self-end'>
      <Toggle />
    </div>
  </div>
)

const Label = ({ children }) => (
  <h3 className='text-xl mb-2 mt-6'>{children}</h3>
)

const Upload = ({ label }) => (
  <React.Fragment>
    <div className='my-10'>
      <p className='text-xl my-2'>{label}</p>
      <p className='w-full text-sm text-darkGrey'>{loremIpsum}</p>
    </div>
    <div className='p-2 bg-lightGrey rounded grid grid-cols-5 items-center'>
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

const Index = () => {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchProfileData())
  }, [])

  const fetchedData = useSelector(state => state.settings)

  if(!fetchedData.data) {
    console.log('Data currently not fetched')
    return null
  }

  console.log(fetchedData)

  const [displayName, setDisplayName] = useState(fetchedData.data.name)
  const [age, setAge] = useState(fetchedData.data.age)
  const [websiteURL, setWebsiteURL] = useState('')
  const [country, setCountry] = useState(null)
  const [language, setLanguage] = useState(null)
  const [primaryEmail, setPrimaryEmail] = useState(fetchedData.data.email)
  const [mobile, setMobile] = useState(fetchedData.data.mobile)
  const [oneLineBio, setOneLineBio] = useState(fetchedData.data.bio)
  const [profileDescription, setProfileDescription] = useState('')

  const [isValid, setIsValid] = useState({
    inputData: {
      displayName: {
        valid: false,
        touched: false,
      },
      age: {
        valid: false,
        touched: false,
      },
      websiteURL: {
        valid: false,
        touched: false,
      },
      primaryEmail: {
        valid: false,
        touched: false,
      },
      mobile: {
        valid: false,
        touched: false,
      },
      oneLineBio: {
        valid: false,
        touched: false,
      },
      profileDescription: {
        valid: false,
        touched: false,
      },
    },
    isFormValid: false,
  })

  const saveButtonClickHandler = () => {
    const formData = {
      primary_type: 'seeker',
      name: `${displayName}`,
      bio: `${oneLineBio}`,
      age: `${age}`,
      balance: 0,
      mobile: `${mobile}`,
    }

    dispatch(saveProfile(formData))
  }

  const inputDataChangeHandler = (value, field, type) => {
    const newIsValid = {
      ...isValid,
    }
    newIsValid.inputData[field].valid = validate(type, value)
    newIsValid.inputData[field].touched = true
    let valid = true
    for (let key in newIsValid.inputData) {
      valid = valid && newIsValid.inputData[key].valid
    }
    newIsValid.isFormValid = valid
    setIsValid(newIsValid)
  }

  return (
    <div className='w-full'>
      <h3 className='text-2xl mb-4'>Profile settings</h3>
      {/* White container start */}
      <div className='bg-white w-full rounded-lg p-6'>
        <div className='grid grid-cols-2'>
          <div className='flex gap-6 items-center'>
            <img
              src='/stock/girl2.jpg'
              alt='Profile Picture'
              className='rounded-full w-24'
            />
            <p className='text-secondary cursor-pointer'>Change photo</p>
          </div>
          <div className='grid grid-cols-2 bg-highlight p-6 items-center'>
            <p className='text-lg'>Available for work</p>
            <div className='justify-self-end'>
              <Toggle />
            </div>
          </div>
        </div>
        <div className='w-full bg-highlight p-4 flex gap-4 mt-6 mb-12'>
          <SecondaryButton label='Request Verification' />
          <SecondaryButton disabled label='Apply to become a pro' />
        </div>

        <Label>Display name</Label>

        <div className='grid grid-cols-2 items-center gap-x-6 gap-y-0 grid-flow-row'>
          <Input
            valid={isValid.inputData.displayName.valid}
            touched={isValid.inputData.displayName.touched}
            inValidMessage='Enter a valid Name'
            value={displayName}
            changeHandler={(value) => {
              setDisplayName(value)
              inputDataChangeHandler(value, 'displayName', 'text')
            }}
          />
          <div className='grid grid-cols-2 items-center'>
            <p className='text-lg'>Show full name on profile</p>
            <div className='justify-self-end'>
              <Toggle />
            </div>
          </div>

          <Label>Age</Label>
          <Label>Website URL</Label>

          <Input
            valid={isValid.inputData.age.valid}
            touched={isValid.inputData.age.touched}
            inValidMessage='Enter a valid age'
            type='number'
            value={age}
            changeHandler={(value) => {
              setAge(value)
              inputDataChangeHandler(value, 'age', 'number')
            }}
          />
          <Input
            valid={isValid.inputData.websiteURL.valid}
            touched={isValid.inputData.websiteURL.touched}
            inValidMessage='Enter a valid URL'
            type='url'
            value={websiteURL}
            changeHandler={(value) => {
              setWebsiteURL(value)
              inputDataChangeHandler(value, 'websiteURL', 'url')
            }}
          />

          <Label>Country</Label>
          <Label>Language</Label>

          <Dropdown changeHandler={(value) => setCountry(value)} />
          <Dropdown changeHandler={(value) => setLanguage(value)} />

          <Label>Primary email</Label>
          <Label>Mobile</Label>

          <Input
            valid={isValid.inputData.primaryEmail.valid}
            touched={isValid.inputData.primaryEmail.touched}
            inValidMessage='Enter a valid email'
            type='email'
            value={primaryEmail}
            changeHandler={(value) => {
              setPrimaryEmail(value)
              inputDataChangeHandler(value, 'primaryEmail', 'email')
            }}
          />
          <Input
            valid={isValid.inputData.mobile.valid}
            touched={isValid.inputData.mobile.touched}
            inValidMessage='Enter a valid Number'
            type='number'
            value={mobile}
            changeHandler={(value) => {
              setMobile(value)
              inputDataChangeHandler(value, 'mobile', 'phone')
            }}
          />

          <Switch label='Show services taken' />
          <Switch label='Show online status' />
        </div>

        <div className='my-10'>
          <Label>One line bio</Label>
          <input
            value={oneLineBio}
            onChange={(e) => {
              setOneLineBio(e.target.value)
              inputDataChangeHandler(e.target.value, 'oneLineBio', 'text')
            }}
            className={`${!isValid.inputData.oneLineBio.valid && isValid.inputData.oneLineBio.touched && 'border-red border-solid border-2'} rounded w-full p-4 text-sm bg-lightGrey`} />
          {!isValid.inputData.oneLineBio.valid && isValid.inputData.oneLineBio.touched && <p>Enter a valid bio</p>}
        </div>
        <div className='my-10'>
          <Label>Profile description</Label>
          <textarea
            value={profileDescription}
            onChange={(e) => {
              setProfileDescription(e.target.value)
              inputDataChangeHandler(e.target.value, 'profileDescription', 'text')
            }}
            className={`${!isValid.inputData.profileDescription.valid && isValid.inputData.profileDescription.touched && 'border-red border-solid border-2'} rounded w-full p-4 text-sm bg-lightGrey h-32`} />
            {!isValid.inputData.profileDescription.valid && isValid.inputData.profileDescription.touched && <p>Enter a valid description</p>}
          {/* <p className='rounded w-full p-2 text-sm bg-lightGrey'>{loremIpsum}</p> */}
        </div>

        <Upload label='Demo videos' />
        <Upload label='Certificates' />

        <div className='w-1/3 mt-6'>
          <PrimaryButton label='Save' disabled={!isValid.isFormValid} clickHandler={saveButtonClickHandler} />
        </div>
      </div>
      {/* White container end */}
    </div>
  )
}

export default Index
