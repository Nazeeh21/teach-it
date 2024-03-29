import React, { useState } from 'react'
import loremIpsum from '../../utility/loremIpsum'
import { useRouter } from 'next/router'
import InstantServicePopup from '../../views/Expert/InstantServicePopup/InstantServicePopup'

const Item = ({ iconSrc, title, titleColor, description, clickHandler }) => (
  <div className="w-full p-6">
    <div className="flex items-center">
      <img className="mr-4 w-8" src={iconSrc} alt={title} />
      <h3 className={`text-xl text-${titleColor}`}>{title}</h3>
    </div>
    <p className="leading-5 text-darkGrey text-sm">{description}</p>
    <div className="sm:w-full xl:w-6/12">
      <button
        onClick={clickHandler}
        className="w-full mt-6 border-secondary border-2 text-lg bg-white text-secondary pt-1 pb-1 pl-4 pr-4 rounded-lg"
      >
        Create
      </button>
    </div>
  </div>
)

const CreateServiceCard = () => {
  const router = useRouter()
  const [showInstantService, setShowInstantService] = useState(false)
  const handleRedirect = () => {
    router.push('/create-service')
  }

  return (
    <div className="rounded-lg bg-white flex flex-col shadow mt-6">
      {showInstantService && (
        <InstantServicePopup
          show={showInstantService}
          backdropClickedHandler={() => setShowInstantService(false)}
        />
      )}
      <div className="rounded-tl-lg rounded-tr-lg p-6">
        <h3 className="text-2xl text-primary">Create a service</h3>
      </div>
      <img className="w-full h-auto" src="/yoga.jpg" alt="Create a service" />
      <Item
        clickHandler={handleRedirect}
        iconSrc="/Live-logo.png"
        title="Live"
        titleColor="red"
        description={loremIpsum}
      />
      <Item
        clickHandler={handleRedirect}
        iconSrc="/rich-media.png"
        title="Rich media"
        titleColor="green"
        description={loremIpsum}
      />
      <div className="text-primary text-xl p-6 ">
        Create an Instant Service
        <button
          onClick={() => {
            // router.push('/instant-service')
            scrollTo(0, 0)
            setShowInstantService(true)
          }}
          className="w-full mt-6 border-secondary border-2 text-lg bg-white text-secondary pt-1 pb-1 pl-4 pr-4 rounded-lg"
        >
          Create Instant Service
        </button>
      </div>
    </div>
  )
}

export default CreateServiceCard
