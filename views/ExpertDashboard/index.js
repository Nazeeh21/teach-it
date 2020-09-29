import React, { useState } from 'react'
import CompactServiceCard from '../../components/Cards/CompactServiceCard/CompactServiceCard'
import SearchBar from '../../components/Inputs/SearchBar'
import { CardFilledWithImage } from '../../components/Cards/Cards'
import { ViewMoreButton } from '../../components/Buttons/Index'

const Index = () => {
  const [query, setQuery] = useState('')

  return (
    <React.Fragment>
      <div className='grid grid-cols-2 w-full'>
        <h3 className='text-2xl mb-6 '>Active services</h3>
        <div className='justify-self-end'>
          <SearchBar value={query} changeHandler={(val) => setQuery(val)} />
        </div>
      </div>
      <CompactServiceCard />
      <CompactServiceCard />
      <div className='m-auto w-2/12'>
        <ViewMoreButton />
      </div>
      <h3 className='text-2xl mb-6'>Trending services</h3>
      <div className='grid grid-flow-row grid-cols-2 w-full gap-6 mb-6'>
        <CardFilledWithImage
          src='nazeeh_profile.jpg'
          title='Music'
          subTitle='234 learners'
        />
        <CardFilledWithImage
          src='nazeeh_profile.jpg'
          title='Music'
          subTitle='234 learners'
        />
        <CardFilledWithImage
          src='nazeeh_profile.jpg'
          title='Music'
          subTitle='234 learners'
        />
        <CardFilledWithImage
          src='nazeeh_profile.jpg'
          title='Music'
          subTitle='234 learners'
        />
      </div>
      <div className='m-auto w-2/12'>
        <ViewMoreButton />
      </div>
    </React.Fragment>
  )
};

export default Index;
