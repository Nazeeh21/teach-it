import React, { useEffect, useState } from 'react'
import CardButton from './CardButton/CardButton'
import loremIpsum from '../../../utility/loremIpsum'
import ISO6391 from 'iso-639-1'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { fetchProviderProfile } from '../../../services/provider'
import Rating from '../../../components/Rating/Rating'

const Image = ({ src, alt }) => (
  <img className="w-full rounded-lg h-auto " src={src} alt={alt} />
)

const CompactServiceCard = ({
  imgSrc = 'stock/girl2.jpg',
  descriptionText = loremIpsum,
  hrefText = '',
  butttonText = 'View',
  buttonDisabled = false,
  buttonClickHandler,
  category,
  cost,
  languages,
  startDate,
  serviceType,
  paymentType = 'Weekly',
  providerPk,
}) => {
  const [providerData, setProviderData] = useState(null)
  const router = useRouter()
  const token = useSelector((state) => state.auth.token)
  const profileId = useSelector((state) => state.app.currentProfile)
  let date = new Date(startDate)
  useEffect(() => {
    fetchProviderProfile(token, providerPk, profileId)
      .then((res) => setProviderData(res))
      .catch((e) => console.log(e))
  }, [token, profileId, providerPk])

  if (!providerData) {
    return null
  }
  return (
    <div className="flex flex-row w-auto p-2 bg-white shadow-md rounded-lg my-3">
      <div className="p-3 w-4/12 sm:w-2/12 flex flex-col">
        <Image src={imgSrc} alt="John" />
        <p className="hidden sm:flex text-3xl font-bold text-accent m-auto">
          13
        </p>
      </div>

      <div className="p-1 w-10/12 flex flex-col">
        <p className="text-sm font-medium">
          {descriptionText.length > 100
            ? descriptionText.substring(0, 50) + '...'
            : descriptionText}
        </p>
        <div className="flex flex-row mt-6">
          <div className="w-1/2 text-sm">
            {category}
            <div style={{ lineHeight: '130%' }} className="text-darkGrey">
              <p>{cost}/week</p>
              <p>5:30 pm</p>
              <p style={{ opacity: '80%' }}>Mon, Tue, Wed, Thurs, Sat</p>
              <p style={{ opacity: '80%' }}>
                Start date: {date.toLocaleDateString()}
              </p>
              <p style={{ opacity: '80%' }}>Payment type: {paymentType}</p>
            </div>
          </div>
          <p className="text-darkGrey text-xs font-medium w-1/2">
            {languages &&
              languages.map((lang, idx) => (
                <span key={idx}>{ISO6391.getName(lang)}</span>
              ))}
            <br></br>
            17 weeks
          </p>
        </div>
        <div className="flex items-center mt-2">
          <img
            src={providerData.pic === '' ? imgSrc : providerData.pic}
            // src={imgSrc}
            alt="Switch profile"
            className="w-8 mr-2 max-w-3/12 h-auto min-h-8 rounded-full"
          />
          <div>
            <div className="text-sm">{providerData.name}</div>
            <Rating value={providerData.rating} size={14} />
          </div>
          <div className="ml-12">
            Pro
            {/* {providerData.is_pro && Pro} */}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div
            style={{ color: `${serviceType === 'rich' ? 'green' : 'red'}` }}
            className="font-medium flex flex-row w-1/2 mt-2"
          >
            <img
              className="mr-1"
              src={`${serviceType}.svg`}
              alt={serviceType}
            />
            <span style={{ textTransform: 'capitalize' }}>
              {serviceType === 'rich' ? 'Rich Media' : serviceType}
            </span>
          </div>
          <div className="w-full sm:w-4/12 flex items-center">
            {hrefText && hrefText !== '' && (
              <div className="w-3/12 mx-2">
                <a style={{ color: '#00bcd4' }} href="/">
                  {hrefText}
                </a>
              </div>
            )}
            <div className="w-9/12 mx-2">
              <CardButton
                // clickHandler={() => router.push('/view-service')}
                clickHandler={buttonClickHandler}
                label={butttonText}
                disabled={buttonDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CompactServiceCard

// Live
