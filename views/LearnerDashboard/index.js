import React, { useEffect, useState } from 'react'
import CompactServiceCard from '../Chat/CompactServiceCard/CompactServiceCard'
import SearchBar from '../../components/Inputs/SearchBar'
import { CardFilledWithImage } from '../../components/Cards/Cards'
import { ViewMoreButton } from '../../components/Buttons/Index'
import { useRouter } from 'next/router'
import {
  fetchNextServices,
  fetchServices,
} from '../../store/actions/appActions'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopCategories } from '../../services/fetchCategories'

const Index = () => {
  // Test
  const router = useRouter()
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const token = useSelector((state) => state.auth.token)
  const profileId = useSelector((state) => state.app.currentProfile)

  const services = useSelector((state) => state.app.services)
  const nextServicePageUrl = useSelector(
    (state) => state.app.nextServicePageUrl
  )
  const [topCategories, setTopCategories] = useState([])
  // const previousServicePageUrl = useSelector(
  //   (state) => state.app.previousPageURL
  // )
  // const initialFetch = useSelector((state) => state.app.initialServiceFetched)

  const handleCategoriesRedirect = () => {
    router.push('/search')
  }

  useEffect(() => {
    if (token && profileId) {
      fetchTopCategories(token, profileId)
        .then((res) => {
          console.log('Top 4 categories in LEarner dashboard', res)
          setTopCategories(res)
        })
        .catch((e) => console.log(e))
    }
  }, [token, profileId])

  useEffect(() => {
    // if (!initialFetch) {
    console.log('useEffect in LEarnerDashboard')

    dispatch(fetchServices(token, profileId))
  }, [dispatch, token, profileId])

  const viewMoreClickHandler = () => {
    dispatch(fetchNextServices(nextServicePageUrl, token, profileId))
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
          paymentType={service.payment_type}
          providerPk={service.provider}
        />
      ))}
      {nextServicePageUrl && (
        <div className="m-auto w-2/12">
          <ViewMoreButton
            label="View more"
            clickHandler={viewMoreClickHandler}
          />
        </div>
      )}
      <h3 className="text-2xl mb-6">Trending services</h3>
      <div className="grid grid-flow-row grid-cols-2 w-full gap-6 mb-6">
        {/* {console.log(topCategories)} */}
        {/* {console.log('Logging top categories', topCategories)} */}
        {topCategories &&
          topCategories.map((category, index) => (
            <CardFilledWithImage
              key={index}
              clickHandler={handleCategoriesRedirect}
              src={category.avatar}
              title={category.title}
              subTitle={`${category.seeker_count} learners`}
            />
          ))}
        {/* <CardFilledWithImage
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
        /> */}
      </div>
      <div className="m-auto w-2/12">
        <ViewMoreButton clickHandler={() => router.push('/categories')} />
      </div>
    </React.Fragment>
  )
}

export default Index
