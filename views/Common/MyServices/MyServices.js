import React, { useState } from 'react'
import Pills from '../../../components/Misc/3Pills/3Pills'
import CompactServiceCard from '../../Chat/CompactServiceCard/CompactServiceCard'
import { useRouter } from 'next/router'
import SearchBar from '../../../components/Inputs/SearchBar'
import { useSelector } from 'react-redux'

const MyServices = () => {
  const [showSearchbar, toggleShowSearchBar] = useState(false)
  const [query, setQuery] = useState('')
  const services = useSelector(state => state.app.services)

  const router = useRouter()

  const handleRedirect = () => router.push('/rich-media-service')

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
        width='w-10/12 sm:w-10/12 md:w-5/12'
        color='white'
        label1='All'
        label2='Live video'
        label3='Rich media'
      />
      {
        services.map(service => (
          <CompactServiceCard
            buttonClickHandler={() => router.push('/view-service')}
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
