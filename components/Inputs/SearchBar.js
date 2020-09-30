import React from 'react'
import { useRouter } from 'next/router'

const SearchBar = ({ value, changeHandler }) => {
  const router = useRouter()

  return (
    <input
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          router.push('/search')
        }
      }}
      style={{ outline: 'none' }}
      value={value}
      onChange={(e) => changeHandler(e.target.value)}
      className='rounded-full bg-white pt-2 pb-2 pl-4 pr-4 w-full-'
    />
  )
}

export default SearchBar
