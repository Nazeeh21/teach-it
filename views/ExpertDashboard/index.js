import React, { useState, useEffect } from 'react'
import CompactServiceCard from '../../components/Cards/CompactServiceCard/CompactServiceCard'
import SearchBar from '../../components/Inputs/SearchBar'
import { CardFilledWithImage } from '../../components/Cards/Cards'
import { ViewMoreButton } from '../../components/Buttons/Index'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchNextProviderService,
  fetchProviderService,
  fetchServices,
} from '../../store/actions/appActions'
import { fetchTopCategories } from '../../services/fetchCategories'
import { EXPERT } from '../../constants'
import { isProvider } from '../../services/profile'

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  let services = useSelector((state) => state.app.providerService)
  const providerId = useSelector((state) => state.app.providerId)
  const currentProfileId = useSelector((state) => state.app.currentProfile)
  const token = useSelector((state) => state.auth.token)
  const nextUrl = useSelector((state) => state.app.nextProviderServiceUrl)
  const [topCategories, setTopCategories] = useState([])
  const userType = useSelector((state) => state.app.userType)
  // const previousUrl = useSelector(
  //   (state) => state.app.previousProviderServiceUrl
  // )
  // const initialFetch = useSelector(
  //   (state) => state.app.intialProviderServiceFetched
  // )

  useEffect(() => {
    if (userType === EXPERT) {
      isProvider(token, currentProfileId).then((res) => {
        // console.log('isProvider', res.isProvider)
        if (res && res.isProvider === false) {
          router.push('/register-provider')
        }
      })
    }
  }, [userType])

  const handleCategoriesRedirect = () => {
    router.push('/search')
  }

  useEffect(() => {
    // if (!initialFetch) {

    if (providerId && token && currentProfileId) {
      console.log('useEffect in ExpertDashboard')

      fetchTopCategories(token, currentProfileId)
        .then((res) => setTopCategories(res))
        .catch((e) => console.log(e))

      dispatch(fetchProviderService(providerId, token, currentProfileId))
    }

    // }
  }, [providerId, currentProfileId, token])

  console.log('profileId', currentProfileId)

  const viewMoreClickHandler = () => {
    dispatch(
      fetchNextProviderService(providerId, token, currentProfileId, nextUrl)
    )
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 w-full">
        <h3 className="text-2xl mb-6 ">Active services</h3>
        <div className="justify-self-end">
          <SearchBar value={query} changeHandler={(val) => setQuery(val)} />
        </div>
      </div>
      {services.length === 0 && (
        <div className="my-8">
          <div className="w-full p-2 pt-10 h-32 bg-white shadow-md rounded-lg mb-6">
            <p className="text-center text-darkGrey">
              You haven't created any services yet.
            </p>
            <p
              onClick={() => router.push('/create-service')}
              className="text-secondary hover:underline cursor-pointer text-center m-auto"
            >
              Create one now!
            </p>
          </div>
        </div>
      )}
      {services.map((service) => (
        <CompactServiceCard
          buttonClickHandler={() => router.push(`/view-service/${service.pk}`)}
          serviceType={service.type}
          key={service.pk}
          category={service.category}
          languages={service.languages}
          descriptionText={service.description}
          paymentType={service.payment_type}
          servicePk={service.pk}
          startDate={service.start_at}
        />
      ))}
      {nextUrl && (
        <div className="m-auto w-2/12">
          <ViewMoreButton
            label="View more"
            clickHandler={viewMoreClickHandler}
          />
        </div>
      )}
      <h3 className="text-2xl mb-6">Trending services</h3>
      <div className="grid grid-flow-row grid-cols-2 w-full gap-6">
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
      </div>
      <div className="mx-auto my-4 w-2/12">
        <ViewMoreButton clickHandler={() => router.push('/categories')} />
      </div>
    </React.Fragment>
  )
}

export default Index
