import React, { useEffect } from 'react'
import CompactServiceCard from '../Chat/CompactServiceCard/CompactServiceCard'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchServices } from '../../store/actions/appActions'

const Index = () => {
  const router = useRouter()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchServices())
  }, [])

  const results = useSelector((state) => state.app.searchResults)

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
    </div>
  )
}

export default Index
