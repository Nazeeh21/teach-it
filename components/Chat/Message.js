import React from 'react'
import Avatar from '../Images/Avatar'

const Index = ({ type, author, content, status = 'delivered', time, width = 'w-6/12' }) => {
  let message

  switch (type) {
    case 'text':
      message = (
        <div className='flex flex-row rounded-lg m-2 my-4'>
          <div>
            {!author.isSelf ? (
              <Avatar isForChat src={author.profilePic} alt={author.name} />
            ) : null}
          </div>
          <div className={`flex flex-col ${width}`}>
            <div className='bg-highlight rounded-lg p-2'>{content}</div>
            <div className='text-darkGrey text-sm text-bold m-1 text-right'>
              {author.isSelf && `${status} ,`} {time}
            </div>
          </div>
        </div>
      )
      break

    case 'image':
      message = (
        <div className='flex flex-row rounded-lg m-2 my-4'>
          <div>
            {!author.isSelf ? (
              <Avatar isForChat src={author.profilePic} alt={author.name} />
            ) : null}
          </div>
          <div className='flex flex-col w-6/12'>
            <div className='bg-highlight rounded-lg p-2'>
              <img className='m-2' src={content.src} alt={content.alt} />
              <span className='m-2'>{content.text}</span>
            </div>

            <div className='text-darkGrey text-sm text-bold m-1 text-right'>
              {author.isSelf && `${status} ,`} {time}
            </div>
          </div>
        </div>
      )
      break
      case 'service':
        message=(
          <div className='flex flex-row rounded-lg m-2 my-4'>
            <div>
              {!author.isSelf ? (
                <Avatar isForChat src={author.profilePic} alt={author.name} />
              ) : null}
            </div>
            <div className='flex flex-col w-full'>
              <div className='bg-highlight rounded-lg p-2'>
                {content}
              </div>
  
              <div className='text-darkGrey text-sm text-bold m-1 text-right'>
                {author.isSelf && `${status} ,`} {time}
              </div>
            </div>
          </div>
        )
        break
    default:
      message = ''
      break
  }

  return message
}

export default Index