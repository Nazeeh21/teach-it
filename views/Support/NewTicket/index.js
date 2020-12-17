import React from 'react'
import Message from '../../../components/Chat/Message'
import CompactServiceCard from '../../Chat/CompactServiceCard/CompactServiceCard'

const Option = () => (
  <div className="flex">
    <div className="rounded-full bg-darkGrey w-1 h-1 mr-1" />
    <div className="rounded-full bg-darkGrey w-1 h-1 mr-1" />
    <div className="rounded-full bg-darkGrey w-1 h-1 mr1" />
  </div>
)

const ChooseOption = () => (
  <div className="bg-highlight rounded-lg font-medium p-2 text-lg">
    <p className="pb-2">Please Choose an Option</p>
    <div className="bg-white p-8 rounded-lg">
      <p>Account</p>
      <p className="my-4">Payments</p>
      <p className="my-4">Services</p>
      <p>Others</p>
    </div>
  </div>
)

const NewTicket = () => {
  const time = new Date()

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 mb-2 items-center">
        <p className="text-2xl font-medium mr-4">Support</p>
        <div className="cursor-pointer h-auto w-6 justify-self-end">
          <img className="w-10/12 h-auto" src="/search.png" alt="search-icon" />
        </div>
      </div>
      <div className="bg-white rounded-lg p-8">
        <div className="bg-lightGrey p-4 mb-8">
          <div className="grid grid-cols-2 grid-rows-1 items-center mb-4">
            <p className="font-medium text-md">[No Subject yet]</p>
            <div className="justify-self-end">
              <Option />
            </div>
          </div>
          <div className="mb-2  grid grid-cols-3 grid-rows-1 text-darkGrey items-center">
            <div className="flex items-center">
              <div>
                <img src="/nav_icons/payments_grey.svg" alt="payment" />
              </div>
              <div className="ml-2">Payments</div>
            </div>
            <div className="flex items-center">
              <div>
                <img src="/calender.svg" alt="calender" />
              </div>
              <div className="ml-2">3 days</div>
            </div>

            <div className="flex items-center justify-end">
              <div>
                <img src="/nav_icons/support_grey.svg" alt="support" />
              </div>
              <div className="ml-2">37FJ3324</div>
            </div>
          </div>
        </div>
        <div
          style={{ maxHeight: '70vh' }}
          className="grid grid-flow-row overflow-y-scroll"
        >
          <Message
            type="text"
            time={time}
            author={{
              isSelf: false,
              profilePic: '/stock/girl2.jpg',
              name: 'John',
            }}
            content="Hi there, how can I help you today?"
          />
          <Message
            type="text"
            time={time}
            author={{
              isSelf: false,
              profilePic: '/stock/girl2.jpg',
              name: 'John',
            }}
            content={<ChooseOption />}
          />
          <div className="justify-self-end ">
            <Message
              width="w-full"
              type="text"
              time={time}
              author={{
                isSelf: true,
                profilePic: '/stock/girl2.jpg',
                name: '',
              }}
              content="Services"
            />
          </div>
          <div className="justify-self-end ">
            <Message
              width="w-full"
              type="service"
              time={time}
              author={{
                isSelf: true,
                profilePic: '/stock/girl2.jpg',
                name: '',
              }}
              content={
                <CompactServiceCard
                  imgSrc="/stock/girl2.jpg"
                  hrefText=""
                  butttonText="Pending"
                  buttonDisabled="true"
                  media={{ src: '/Live.svg', text: 'Live', color: '#ff414d' }}
                  imgsrc="/stock/music.jpg"
                />
              }
            />
          </div>
          <div className="justify-self-end ">
            <Message
              width="w-full"
              type="text"
              time={time}
              author={{
                isSelf: true,
                profilePic: '/stock/girl2.jpg',
                name: 'John',
              }}
              content="This service is not letting me enter"
            />
          </div>
        </div>
        <div
          className="mt-5 bg-accentedWhite rounded-bl-md rounded-br-md flex justify-center"
          id="typebox"
        >
          <button className="m-auto w-8 flex justify-center items-center">
            <img src="/drawer.svg" alt="drawer" />
          </button>
          <button className="m-auto w-8 flex justify-center items-center">
            <img src="/camera.svg" alt="camera" />
          </button>
          <button className="m-auto w-8 flex justify-center items-center">
            <img src="/gallery.svg" alt="gallery" />
          </button>
          <input
            style={{ outline: 'none' }}
            className="border-highlight border-2 w-8/12 h-10 mx-2 my-2 rounded px-2 py-4"
            type="text"
            onChange={(e) => e.target.value}
          />
        </div>
      </div>
    </div>
  )
}

export default NewTicket
