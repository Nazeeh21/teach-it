import React from 'react'
import Avatar from '../Images/Avatar'
import loremIpsum from '../../utility/loremIpsum'
import ISO6391 from 'iso-639-1'
import { useSelector } from 'react-redux'

const Image = ({ src }) => (
  <div className="w-full rounded-lg">
    <img className="w-full" src={src} alt={src} />
  </div>
)

const VidThumbnail = ({ thumbSrc }) => (
  <React.Fragment>
    <img className="rounded-lg w-full" src={thumbSrc} alt={thumbSrc} />
  </React.Fragment>
)

const Profile = ({ profileData }) => {
  const userType = useSelector((state) => state.app.userType)

  console.log('Logging profileData', profileData)
  const {
    country,
    languages,
    name,
    online,
    provider,
    bio,
    description,
    avatar_url,
  } = profileData

  return (
    <>
      <div className="w-full m-2 flex flex-row">
        <div className="w-3/12 mr-8 justify-center">
          {online && (
            <div className="pr-5 items-center flex flex-row bg-highlight z-50 absolute rounded-full">
              <div
                style={{ backgroundColor: 'lightGreen' }}
                className="m-2 w-2 h-2 rounded-full"
              />
              Online
            </div>
          )}

          <Avatar
            purpose="isForProfile"
            src={avatar_url || '/avis/ana.png'}
            alt={name}
          />

          <div className=" mt-6 text-center">
            <p className="text-xl">{country}</p>
            {languages.map((language, index) => (
              <span key={index} className="text-xs pt-0 text-darkGrey">
                {ISO6391.getName(language) + ' '}
              </span>
            ))}
          </div>
        </div>

        <div className="w-8/12 flex flex-col">
          <p className="text-3xl mt-4">{name}</p>
          <p className="text-lg font-bold mt-2 text-darkGrey">
            {bio || loremIpsum.slice(0, 20)}
          </p>
          <p className="text-md mt-2 text-darkGrey">
            {description || loremIpsum}
          </p>
        </div>
      </div>
      {/* Certifications */}
      {userType === 0 && (
        <div>
          <h3 className="text-darkGrey text-xl mt-6 font-semibold">
            Certifications
          </h3>
          {provider && provider.docs.length === 0 && (
            <div className="my-2 w-full">
              <p className="text-darkGrey">
                This user hasn't uploaded any certifications.
              </p>
            </div>
          )}
          <div className="grid grid-flow-row gap-2 grid-cols-5 w-full mt-3 items-center">
            {provider &&
              provider.docs.map((doc, idx) => <Image src={doc} key={idx} />)}
          </div>
        </div>
      )}

      {/* Demo videos */}
      {/* <h3 className="text-darkGrey text-xl mt-6 font-semibold">Demo Videos</h3>
      <div className="grid grid-flow-row gap-2 grid-cols-5 w-full mt-3 items-center">
        <Image
          src="/
certificates/1.png"
        />
        <Image
          src="/
certificates/2.png"
        />
        <Image
          src="/
certificates/3.png"
        />
      </div> */}
    </>
  )
}

export default Profile
