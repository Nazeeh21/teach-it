import React, { useState } from 'react'
import CompactServiceCard from '../CompactServiceCard/CompactServiceCard'
import BackDrop from '../../../components/Backdrop'
import SendOffer from './SendOffer/SendOffer'
import ServiceSwitch from './ServiceSwitch/ServiceSwitch'

const ChooseService = ({ show = true, clickHandler }) => {
  const [showSendOffer, setShowSendOffer] = useState(false)

  const sendOfferCloseHandler = () => setShowSendOffer(false)

  const sendOfferOpenHandler = () => setShowSendOffer(true)

  return (
    <div style={{ display: !show && 'none' }}>
      <BackDrop
        show={show}
        clicked={() => {
          clickHandler()
          sendOfferCloseHandler()
        }}
      />
      <div
        style={{
          zIndex: '100',
          borderBottomLeftRadius: '1rem',
          borderTopLeftRadius: '1rem',
          transform: show ? 'translateX(0)' : 'translateX(-10vh)',
          opacity: show ? '1' : '0',
        }}
        className="absolute fixed right-0 top-0 w-5/12 bg-white "
      >
        <div className="mx-10 my-6 overflow">
          <div
            style={{ display: !showSendOffer && 'none' }}
            className="absolute w-full"
          >
            <BackDrop show={showSendOffer} clicked={sendOfferCloseHandler} />
            <div
              style={{
                zIndex: '1000',
                opacity: showSendOffer ? '1' : '0',
              }}
              className="absolute w-full"
            >
              <SendOffer />
            </div>
          </div>

          <button
            className="cursor-pointer text-5xl font-small"
            onClick={clickHandler}
          >
            X
          </button>
          <div className="my-5">
            <div className="my-3 flex items-center grid grid-cols-2 grid-rows-1">
              <p className=" mx-3 text-2xl font-medium">Choose a service</p>
              <button className="justify-self-end h-auto w-8">
                <img
                  className=" w-10/12 h-auto"
                  src="/search.png"
                  alt="search-icon"
                />
              </button>
            </div>
            <ServiceSwitch
              color="white"
              label1="My Services"
              label2="Deepak's Services"
            />
            <CompactServiceCard
              buttonClickHandler={sendOfferOpenHandler}
              butttonText="Propose"
              media={{
                src: 'rich-media.svg',
                text: 'Rich Media',
                color: '#50d890',
              }}
            />
            <CompactServiceCard
              buttonClickHandler={sendOfferOpenHandler}
              butttonText="Propose"
              media={{
                src: 'rich-media.svg',
                text: 'Rich Media',
                color: '#50d890',
              }}
            />
            <CompactServiceCard
              buttonClickHandler={sendOfferOpenHandler}
              butttonText="Propose"
              media={{
                src: 'rich-media.svg',
                text: 'Rich Media',
                color: '#50d890',
              }}
            />
            <CompactServiceCard
              buttonClickHandler={sendOfferOpenHandler}
              butttonText="Propose"
              media={{
                src: 'rich-media.svg',
                text: 'Rich Media',
                color: '#50d890',
              }}
            />
          </div>
        </div>
      </div>
    </div>

    // </Modal>
  )
}

export default ChooseService
