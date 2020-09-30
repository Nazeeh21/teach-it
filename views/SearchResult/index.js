import React from 'react'
import CompactServiceCard from '../Chat/CompactServiceCard/CompactServiceCard'

const Index = () => <div className='w-full'>
  <div className='font-medium text-2xl grid grid-cols-2 grid-rows-1'>
    <p>Search Results</p>
  </div>
  <CompactServiceCard butttonText='View' media={{text: 'Rich Media', src: 'rich-media.svg',color: '#41BE27'}} />
  <CompactServiceCard butttonText='View' media={{text: 'Rich Media', src: 'rich-media.svg',color: '#41BE27'}} />
  <CompactServiceCard butttonText='View' media={{text: 'Rich Media', src: 'rich-media.svg',color: '#41BE27'}} />
  <CompactServiceCard butttonText='View' media={{text: 'Rich Media', src: 'rich-media.svg',color: '#41BE27'}} />
</div>;

export default Index;
