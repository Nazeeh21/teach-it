import React, { useEffect, useState } from 'react'
import Pills from '../../../components/Misc/3Pills/3Pills'
import CompactServiceCard from '../../Chat/CompactServiceCard/CompactServiceCard'
import { useRouter } from 'next/router'
import SearchBar from '../../../components/Inputs/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchServices, fetchUserServices } from '../../../store/actions/appActions'

const MyServices = () => {
  const [showSearchbar, toggleShowSearchBar] = useState(false)
  const [query, setQuery] = useState('')
  const services = useSelector(state => state.app.userServices)

  const [activePillLabel, setLabel] = useState('all')

  const router = useRouter()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserServices())
  }, [])

  return (
    <div>
      <div className='grid grid-cols-2 grid-rows-1'>
        <p className='text-2xl font-medium'>Active Services</p>
        {showSearchbar ? (
          <SearchBar value={query} changeHandler={setQuery} />
        ) : (
            <button
              onClick={() => toggleShowSearchBar(true)}
              className='w-5 justify-self-end'
            >
              <img src='/search.png' alt='search-img' />
            </button>
          )}
      </div>
      <Pills
        activeLabel={activePillLabel}
        setLabel={setLabel}
        width='w-10/12 sm:w-10/12 md:w-5/12'
        color='white'
        label1='All'
        label2='Live'
        label3='Rich'
      />
      {
        services.filter(service => {
          if (activePillLabel === 'all') {
            return true
          }

          return activePillLabel === service.type
        }).map(service => (
          <CompactServiceCard
            buttonClickHandler={() => router.push(`/view-service/${service.pk}`)}
            category={service.category}
            languages={service.languages}
            serviceType={service.type}
            descriptionText={service.description}
            cost={service.cost}
            startDate={service.start_at}
          />
        ))
      }
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
    </div>
  )
}

export default MyServices
