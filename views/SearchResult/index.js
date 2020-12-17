import React, { useEffect } from 'react'
import CompactServiceCard from '../Chat/CompactServiceCard/CompactServiceCard'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchNextSearchResults,
  fetchServices,
} from '../../store/actions/appActions'
import { ViewMoreButton } from '../../components/Buttons/Index'

const Index = () => {
  const router = useRouter()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchServices())
  }, [])

  const results = useSelector((state) => state.app.searchResults)
  const nextPageUrl = useSelector((state) => state.app.nextSearchResultUrl)
  const payload = useSelector((state) => state.app.payloadForSearch)

  const viewMoreClickHandler = () => {
    dispatch(fetchNextSearchResults(nextPageUrl, payload))
  }

  return (
    <div className="w-full">
      <div className="font-medium text-2xl grid grid-cols-2 grid-rows-1">
        <p>Search Results</p>
      </div>
      {results.map((service) => (
        <CompactServiceCard
          buttonClickHandler={() => router.push(`/view-service/${service.pk}`)}
          category={service.category}
          languages={service.languages}
          serviceType={service.type}
          descriptionText={service.description}
          cost={service.cost}
          startDate={service.start_at}
        />
      ))}

      {nextPageUrl && (
        <div className="m-auto w-2/12">
          <ViewMoreButton clickHandler={viewMoreClickHandler} />
        </div>
      )}
    </div>
  )
}

export default Index
