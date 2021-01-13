import React, { useEffect, useState } from 'react'
import Pills from '../../../components/Misc/3Pills/3Pills'
import CompactServiceCard from '../../Chat/CompactServiceCard/CompactServiceCard'
import { useRouter } from 'next/router'
import SearchBar from '../../../components/Inputs/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchNextUserServices,
  fetchServices,
  fetchUserServices,
} from '../../../store/actions/appActions'
import { ViewMoreButton } from '../../../components/Buttons/Index'

const MyServices = () => {
  const [showSearchbar, toggleShowSearchBar] = useState(false)
  const [query, setQuery] = useState('')
  const services = useSelector((state) => state.app.userServices)
  const nextUserServiceUrl = useSelector(
    (state) => state.app.nextUserServicesUrl
  )
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)
  // const previousUserServiceUrl = useSelector(state => state.app.previousUserServicesUrl)
  // const initialFetch = useSelector(
  //   (state) => state.app.initialUserServicesFetched
  // )

  const [activePillLabel, setLabel] = useState('all')

  const router = useRouter()

  const dispatch = useDispatch()

  useEffect(() => {
    if (token && currentProfileId) {
      dispatch(fetchUserServices(token, currentProfileId))
    }
  }, [token, currentProfileId])

  const viewMoreClickHandler = () => {
    dispatch(fetchNextUserServices(nextUserServiceUrl, token, currentProfileId))
  }

  useEffect(() => console.log('logging userServices', services), [services])

  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-1">
        <p className="text-2xl font-medium">Active Services</p>
        {showSearchbar ? (
          <SearchBar value={query} changeHandler={setQuery} />
        ) : (
          <button
            onClick={() => toggleShowSearchBar(true)}
            className="w-5 justify-self-end"
          >
            <img src="/search.png" alt="search-img" />
          </button>
        )}
      </div>
      <Pills
        activeLabel={activePillLabel}
        setLabel={setLabel}
        width="w-10/12 sm:w-10/12 md:w-5/12"
        color="white"
        label1="All"
        label2="Live"
        label3="Rich"
      />
      {services.length === 0 && (
        <div className="my-8">
          <p className="text-center text-darkGrey">
            You don't have any active services.
          </p>
          {/* <p
            onClick={() => router.push('/create-service')}
            className="text-secondary hover:underline cursor-pointer text-center m-auto"
          >
            Create one now!
          </p> */}
        </div>
      )}
      {services
        .filter((service) => {
          console.log('Current service', service)
          if (activePillLabel === 'all') {
            return true
          }

          return activePillLabel === service.type
        })
        .map((service, index) => {
          console.log('current service in Compact service card', service)
          return (
            <CompactServiceCard
              key={index}
              buttonClickHandler={() =>
                router.push(`/view-service/${service.pk}`)
              }
              category={service.category}
              languages={service.languages}
              serviceType={service.type}
              descriptionText={service.description}
              cost={service.cost}
              startDate={service.start_at}
              paymentType={service.payment_type}
              providerPk={service.provider}
            />
          )
        })}
      {/* <CompactServiceCard
        buttonClickHandler={handleRedirect}
        butttonText='View'
        media={{ text: 'Rich Media', color: 'green', src: 'rich-media.svg' }}
      />
      <CompactServiceCard
        buttonClickHandler={handleRedirect}
        butttonText='View'
        media={{ text: 'Rich Media', color: 'green', src: 'rich-media.svg' }}
      /> */}

      {nextUserServiceUrl && (
        <div className="m-auto w-2/12">
          <ViewMoreButton clickHandler={viewMoreClickHandler} />
        </div>
      )}
    </div>
  )
}

export default MyServices
