import React, { useEffect, useState } from 'react'
import CompactServiceCard from '../Chat/CompactServiceCard/CompactServiceCard'
import SearchBar from '../../components/Inputs/SearchBar'
import { CardFilledWithImage } from '../../components/Cards/Cards'
import { ViewMoreButton } from '../../components/Buttons/Index'
import { useRouter } from 'next/router'
import { fetchServices } from '../../store/actions/appActions'
import { useDispatch, useSelector } from 'react-redux'

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const services = useSelector((state) => state.app.services)
  const nextServicePageUrl = useSelector(
    (state) => state.app.nextServicePageUrl
  )
  const previousServicePageUrl = useSelector(
    (state) => state.app.previousPageURL
  )

  const handleCategoriesRedirect = () => {
    router.push('/search')
  }

  useEffect(() => {
    if (!nextServicePageUrl && !previousServicePageUrl) {
      dispatch(fetchServices())
    }
  }, [services])

  const viewMoreClickHandler = () => {
    dispatch(fetchServices(nextServicePageUrl))
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 w-full">
        <h3 className="text-2xl mb-6 ">Active services</h3>
        <div className="justify-self-end">
          <SearchBar value={query} changeHandler={(val) => setQuery(val)} />
        </div>
      </div>
      {services.map((service, index) => (
        <CompactServiceCard
          key={index}
          buttonClickHandler={() => router.push(`/view-service/${service.pk}`)}
          category={service.category}
          languages={service.languages}
          serviceType={service.type}
          descriptionText={service.description}
          cost={service.cost}
          startDate={service.start_at}
        />
      ))}
      {/* <CompactServiceCard
        buttonClickHandler={() => router.push('/view-service')}
        butttonText='View'
        imgsrc='/stock/guitar.jpg'
        media={{ text: 'Live', color: 'red', src: 'live.svg' }}
      />
      <CompactServiceCard
        buttonClickHandler={() => router.push('/view-service')}
        butttonText='View'
        imgsrc='/stock/market.jpg'
        media={{ text: 'Rich Media', color: 'green', src: 'rich-media.svg' }}
      /> */}
      <div className="m-auto w-2/12">
        <ViewMoreButton clickHandler={viewMoreClickHandler} />
      </div>
      <h3 className="text-2xl mb-6">Trending services</h3>
      <div className="grid grid-flow-row grid-cols-2 w-full gap-6 mb-6">
        <CardFilledWithImage
          clickHandler={handleCategoriesRedirect}
          src="/stock/music.jpg"
          title="Music"
          subTitle="234 learners"
        />
        <CardFilledWithImage
          clickHandler={handleCategoriesRedirect}
          src="/stock/dance.jpg"
          title="Dance"
          subTitle="658 learners"
        />
        <CardFilledWithImage
          clickHandler={handleCategoriesRedirect}
          src="/yoga.jpg"
          title="Yoga"
          subTitle="461 learners"
        />
        <CardFilledWithImage
          clickHandler={handleCategoriesRedirect}
          src="/stock/photography.jpg"
          title="Photography"
          subTitle="137 learners"
        />
      </div>
      <div className="m-auto w-2/12">
        <ViewMoreButton clickHandler={() => router.push('/services')} />
      </div>
    </React.Fragment>
  )
}

export default Index
