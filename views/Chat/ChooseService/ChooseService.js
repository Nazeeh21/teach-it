import React from 'react'
import CompactServiceCard from '../CompactServiceCard/CompactServiceCard'
import Modal from './Modal/Modal'
import SendOffer from './SendOffer/SendOffer'
import ServiceSwitch from './ServiceSwitch/ServiceSwitch'

const ChooseService = () => (
  // <Modal open='true'>
    <div style={{zIndex: '50', borderBottomLeftRadius: '1rem', borderTopLeftRadius: '1rem'}} className='overflow-scroll fixed right-0 top-0 w-5/12 bg-white '>
       <div className='mx-10 my-6 overflow'>
         <SendOffer />
        <button className='text-5xl font-small'>X</button>
        <div className='my-5'>
          <div className='my-3 flex items-center'>
            <p className=' mx-3 text-2xl font-medium'>Choose a service</p>
            <button className='h-auto w-8'>
              <img className='w-10/12 ml-64 h-auto' src='search.png' alt='search-icon' />
            </button>
          </div>
          <ServiceSwitch color='white' label1='My Services' label2="Deepak's Services" />
          <CompactServiceCard butttonText='Propose' media={{text: 'Rich Media', color: '#50d890'}} />
          <CompactServiceCard butttonText='Propose' media={{text: 'Rich Media', color: '#50d890'}} />
          <CompactServiceCard butttonText='Propose' media={{text: 'Rich Media', color: '#50d890'}} />
          <CompactServiceCard butttonText='Propose' media={{text: 'Rich Media', color: '#50d890'}} />
        </div>
       </div>
  </div>
  // </Modal>
)

export default ChooseService