import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Rating from '../../components/Rating/Rating'
import LayoutProvider from '../../layout/LayoutProvider'
import { fetchProviderProfile } from '../../services/provider'
import { fetchNextProviderService } from '../../store/actions/appActions'
const Image = ({ src, alt }) => (
  <img className="w-full rounded-lg h-auto " src={src} alt={alt} />
)

const UploadImageAndVideo = ({ src }) => (
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
  ></div>
)

const Index = () => {
  const router = useRouter()
  const pk = router.query.id
  const token = useSelector((state) => state.auth.token)
  const profileId = useSelector((state) => state.app.currentProfile)
  const [providerData, setProviderData] = useState(null)

  useEffect(() => {
    if (token && profileId) {
      fetchProviderProfile(token, pk, profileId)
        .then((res) => setProviderData(res))
        .catch((e) => console.log(e))
    }
  }, [pk, token, profileId])

  if (!providerData) {
    return null
  }
  return (
    <LayoutProvider>
      <div className="flex flex-row w-auto p-2 bg-white shadow-md rounded-lg my-3">
        <div className="p-3 w-4/12 sm:w-2/12 flex flex-col">
          <Image
            src={`${
              providerData.pic === '' ? '/arun-kumar.png' : providerData.pic
            }`}
          />
        </div>
        <div className="p-3 w-10/12 flex flex-col">
          {/* <div className='flex items-center'> */}
          <div className="text-md font-semibold">{providerData.name}</div>

          {/* </div> */}
          <div>Bio: {providerData.bio}</div>
          <div>{providerData.country}</div>
          <div>Services: {providerData.service_count}</div>
          <div>Website: {providerData.website}</div>
          <div>{providerData.seekers_count} learners</div>

          <div>
            {providerData.available_for_work
              ? 'Available for work'
              : 'Not available for work'}
          </div>
          {providerData.docs.map((doc) => (
            <UploadImageAndVideo src={doc} />
          ))}
          <div className="">
            <Rating value={providerData.rating} size={20} />
          </div>
        </div>
      </div>
    </LayoutProvider>
  )
}

export default Index
