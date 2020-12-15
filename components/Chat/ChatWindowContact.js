import React from 'react'
import Avatar from '../Images/Avatar'
import ReactTimeAgo from 'react-time-ago'

const CHAR_LIMIT = 30

const ActiveSign = () => (
  <div
    style={{
      zIndex: '2000',
      width: '0.6rem',
      height: '0.6rem',
      border: '0.09rem solid white',
      background: '#41C523',
      position: 'absolute',
      marginLeft: '2.2rem',
      marginTop: '0.5rem',
    }}
    className="rounded-full "
  />
)

export const ChatWindowContact = ({
  src,
  name,
  text,
  active = false,
  time,
  current = false,
  clickHandler,
}) => {
  let date = new Date(time)

  return (
    <div
      onClick={clickHandler}
      style={{ borderBottom: '2px solid #f3f4f8' }}
      className={`bg-${
        current ? 'lightCyan' : 'white'
      } cursor-pointer p-2 flex gap-4 items-center w-full rounded-b-lg`}
    >
      <div>
        {active && <ActiveSign />}
        <Avatar src={src} alt={name} purpose="isForChat" />
      </div>
      <div>
        <p className={`${current ? 'font-bold' : 'font-normal'} text-md`}>
          {name ? 'User' : name}
        </p>
        <div className="grid grid-cols-2 items-center w-full">
          <p className="col-span-2 text-sm text-darkGrey justify-start lg:mr-4">
            {text && text.length > CHAR_LIMIT
              ? `${text.slice(0, CHAR_LIMIT)}...`
              : text}
          </p>
          <p className="justify-self-end italic text-lightGrey text-xs justify-end">
            <ReactTimeAgo date={date} />
          </p>
        </div>
      </div>
    </div>
  )
}
