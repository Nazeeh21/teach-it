import React, { useEffect, useState } from 'react'
import Toggle from '../../../components/Toggle'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../components/Buttons/Index'
import Input from '../../../components/Inputs/HighlightInput'
import Dropdown from '../../../components/Inputs/Dropdown'
import { useDispatch } from 'react-redux'
import { saveProfile } from '../../../store/actions/settingActions'
import { validate } from '../../../utility/validation'
import { fetchProfileData } from '../../../services/settings'
import { Upload, Switch, Label, Clickable } from './Util'
import EmailModal from './EmailModal'
import MobileModal from './MobileModal'

const Index = () => {
  const dispatch = useDispatch()

  const [shouldFetch, triggerFetch] = useState(false)

  const [fetchedData, setFetchedData] = useState(null)
  useEffect(() => {
    fetchProfileData()
      .then((res) => {
        console.log(res)
        setFetchedData(res)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [shouldFetch])

  useEffect(() => {
    console.log('Fetched data', fetchedData)
  }, [fetchedData])

  const [displayName, setDisplayName] = useState('')
  const [age, setAge] = useState('')
  const [websiteURL, setWebsiteURL] = useState('')
  const [country, setCountry] = useState(null)
  const [language, setLanguage] = useState(null)
  const [oneLineBio, setOneLineBio] = useState('')
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
      // email: `${primaryEmail}`,
      // mobile: `${mobile}`,
    }

    dispatch(saveProfile(formData, certificates))
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

  const [emailModal, toggleEmailModal] = useState(false)
  const [mobileModal, toggleMobileModal] = useState(false)

  const [certificates, setCertificates] = useState([])

  if (!fetchedData) {
    return null
  }

  return (
    <>
      <EmailModal
        triggerFetch={triggerFetch}
        showModal={emailModal}
        toggleModal={toggleEmailModal}
      />
      <MobileModal
        triggerFetch={triggerFetch}
        showModal={mobileModal}
        toggleModal={toggleMobileModal}
      />
      <div className="w-full">
        <h3 className="text-2xl mb-4">Profile settings</h3>
        <div className="bg-white w-full rounded-lg p-6">
          <div className="grid grid-cols-2">
            <div className="flex gap-6 items-center">
              <img
                src="/stock/girl2.jpg"
                alt="Profile Picture"
                className="rounded-full w-24"
              />
              <p className="text-secondary cursor-pointer">Change photo</p>
            </div>
            <div className="grid grid-cols-2 bg-highlight p-6 items-center">
              <p className="text-lg">Available for work</p>
              <div className="justify-self-end">
                <Toggle />
              </div>
            </div>
          </div>
          <div className="w-full bg-highlight p-4 flex gap-4 mt-6 mb-12">
            <SecondaryButton label="Request Verification" />
            <SecondaryButton disabled label="Apply to become a pro" />
          </div>

          <Label>Display name</Label>

          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-0 grid-flow-row">
            <Input
              placeholder={fetchedData && fetchedData[0].name}
              defaultValue={fetchedData && fetchedData[0].name}
              valid={isValid.inputData.displayName.valid}
              touched={isValid.inputData.displayName.touched}
              inValidMessage="Enter a valid Name"
              value={displayName}
              changeHandler={(value) => {
                setDisplayName(value)
                inputDataChangeHandler(value, 'displayName', 'text')
              }}
            />
            <div className="grid grid-cols-2 items-center">
              <p className="text-lg">Show full name on profile</p>
              <div className="justify-self-end">
                <Toggle />
              </div>
            </div>

            <Label>Age</Label>
            <Label>Website URL</Label>

            <Input
              placeholder={fetchedData && fetchedData[0].age}
              defaultValue={fetchedData && fetchedData[0].age}
              valid={isValid.inputData.age.valid}
              touched={isValid.inputData.age.touched}
              inValidMessage="Enter a valid age"
              type="number"
              value={age}
              changeHandler={(value) => {
                setAge(value)
                inputDataChangeHandler(value, 'age', 'number')
              }}
            />
            <Input
              valid={isValid.inputData.websiteURL.valid}
              touched={isValid.inputData.websiteURL.touched}
              inValidMessage="Enter a valid URL"
              type="url"
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
              placeholder={fetchedData && fetchedData[0].email}
              defaultValue={fetchedData && fetchedData[0].email}
              // valid={isValid.inputData.primaryEmail.valid}
              // touched={isValid.inputData.primaryEmail.touched}
              inValidMessage="Enter a valid email"
              type="email"
              // value={primaryEmail}
              // changeHandler={(value) => {
              //   setPrimaryEmail(value)
              //   inputDataChangeHandler(value, 'primaryEmail', 'email')
              // }}
              disabled={true}
            />
            <Input
              placeholder={fetchedData && fetchedData[0].mobile}
              defaultValue={fetchedData && fetchedData[0].mobile}
              // valid={isValid.inputData.mobile.valid}
              // touched={isValid.inputData.mobile.touched}
              inValidMessage="Enter a valid Number"
              type="number"
              // value={mobile}
              // changeHandler={(value) => {
              //   setMobile(value)
              //   inputDataChangeHandler(value, 'mobile', 'phone')
              // }}
              disabled={true}
            />

            {/* <div className="flex w-full"> */}
            <Clickable onClick={() => toggleEmailModal(true)}>
              Change email
            </Clickable>
            <Clickable onClick={() => toggleMobileModal(true)}>
              Change mobile
            </Clickable>
            {/* </div> */}

            <Switch label="Show services taken" />
            <Switch label="Show online status" />
          </div>

          <div className="my-10">
            <Label>One line bio</Label>
            <input
              defaultValue={fetchedData && fetchedData[0].bio}
              value={oneLineBio}
              onChange={(e) => {
                setOneLineBio(e.target.value)
                inputDataChangeHandler(e.target.value, 'oneLineBio', 'text')
              }}
              className={`${
                !isValid.inputData.oneLineBio.valid &&
                isValid.inputData.oneLineBio.touched &&
                'border-red border-solid border-2'
              } rounded w-full p-4 text-sm bg-lightGrey`}
            />
            {!isValid.inputData.oneLineBio.valid &&
              isValid.inputData.oneLineBio.touched && <p>Enter a valid bio</p>}
          </div>
          <div className="my-10">
            <Label>Profile description</Label>
            <textarea
              defaultValue=""
              value={profileDescription}
              onChange={(e) => {
                setProfileDescription(e.target.value)
                inputDataChangeHandler(
                  e.target.value,
                  'profileDescription',
                  'text'
                )
              }}
              className={`${
                !isValid.inputData.profileDescription.valid &&
                isValid.inputData.profileDescription.touched &&
                'border-red border-solid border-2'
              } rounded w-full p-4 text-sm bg-lightGrey h-32`}
            />
            {!isValid.inputData.profileDescription.valid &&
              isValid.inputData.profileDescription.touched && (
                <p>Enter a valid description</p>
              )}
          </div>

          {/* <Upload key="demoVideos" files={certificates} label="Demo videos" imageInputChangeHandler={data => alert('Input for video clicked')} /> */}
          <div>
            <Upload
              key="certificates"
              files={certificates}
              label="Certificates"
              imageInputChangeHandler={(data) => {
                // alert('Input for certificates clicked')
                const newCertificates = [...certificates]
                newCertificates.push(data)
                setCertificates(newCertificates)
                // console.log('new Certificates ', certificates)
              }}
              cancelClickHandler={(index) => {
                const newCertificates = [...certificates]
                newCertificates.splice(index, 1)
                setCertificates(newCertificates)
              }}
            />
          </div>

          <div className="w-1/3 mt-6">
            <PrimaryButton
              label="Save"
              // disabled={!isValid.isFormValid}
              clickHandler={saveButtonClickHandler}
            />
          </div>
        </div>
        {/* White container end */}
      </div>
    </>
  )
}

export default Index
