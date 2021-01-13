import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchNextProviderService,
  fetchNextServices,
  fetchNextUserServices,
  fetchProviderService,
  fetchServices,
  fetchUserServices,
} from '../../../store/actions/appActions'
import CompactServiceCard from '../../../views/Chat/CompactServiceCard/CompactServiceCard'
import { ViewMoreButton } from '../../Buttons/Index'
import Pills2 from '../../Misc/3Pills/2Pills'

const CurrentProfileServices = () => {
  const router = useRouter()
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)
  const providerId = useSelector((state) => state.app.providerId)
  const providerService = useSelector((state) => state.app.providerService)
  const seekerServices = useSelector((state) => state.app.userServices)
  const nextProviderPageUrl = useSelector(
    (state) => state.app.nextProviderServiceUrl
  )
  const nextSeekerPageUrl = useSelector(
    (state) => state.app.nextUserServicesUrl
  )

  const dispatch = useDispatch()

  const [displayServices, setDisplayServices] = useState('as expert')

  useEffect(() => {
    if (providerId && token && currentProfileId) {
      dispatch(fetchProviderService(providerId, token, currentProfileId))
    }
  }, [providerId, token, currentProfileId])

  useEffect(() => {
    if (token && currentProfileId) {
      dispatch(fetchUserServices(token, currentProfileId))
    }
  }, [dispatch, token, currentProfileId])

  const viewMoreClickHandlerProvider = () => {
    dispatch(
      fetchNextProviderService(
        currentProfileId,
        token,
        currentProfileId,
        nextProviderPageUrl
      )
    )
  }

  const viewMoreClickHandlerSeeker = () => {
    dispatch(fetchNextUserServices(nextSeekerPageUrl, token, currentProfileId))
  }

  useEffect(() => console.log('services subscribed', seekerServices), [
    seekerServices,
  ])
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <div className="text-2xl font-medium">Services</div>
        <div className="justify-items-end">
          <ViewMoreButton label="Offers Instant services" />
        </div>
      </div>

      <div className="w-4/12 mb-8">
        <Pills2
          activeLabel={displayServices}
          setLabel={(label) => setDisplayServices(label)}
          color="white"
          label1="As expert"
          label2="As learner"
          width="full"
        />
      </div>
      {displayServices === 'as expert' && (
        <div>
          {providerService.map((service, index) => (
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
          ))}

          {nextProviderPageUrl && (
            <div className="m-auto w-2/12">
              <ViewMoreButton
                label="View more"
                clickHandler={viewMoreClickHandlerProvider}
              />
            </div>
          )}
        </div>
      )}

      {displayServices === 'as learner' && (
        <div>
          {seekerServices.map((service, index) => (
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
          ))}
          {nextSeekerPageUrl && (
            <div className="m-auto w-2/12">
              <ViewMoreButton
                label="View more"
                clickHandler={viewMoreClickHandlerSeeker}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CurrentProfileServices
