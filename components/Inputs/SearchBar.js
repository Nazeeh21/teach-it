import React from 'react'
import { useRouter } from 'next/router'
import { Icon } from '../Images/Icon'

const SearchBar = ({ value, changeHandler, bgColor = 'white' }) => {
  const router = useRouter()

  return (
    <div className="flex">
      <input
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            router.push('/search')
          }
        }}
        style={{ outline: 'none', height: '2rem' }}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
        className={`rounded-full bg-${bgColor} pt-2 pb-2 pl-4 pr-10 w-full`}
      />
      <div onClick={() => router.push('/search')} className="-ml-12">
        <Icon width="w-4" src="/search.png" />
      </div>
    </div>
  )
}

export default SearchBar
