import React from 'react'

const Index = () => (
  <div className="w-full bg-lightGrey pt-8 pb-8">
    <div className="flex items-center justify-center mt-6 gap-8">
      <a className="" href="/">
        <img
          style={{ width: '1.55rem' }}
          src="/socials/twitter.svg"
          alt="twitter"
        />
      </a>
      <a className="" href="/">
        <img
          style={{ width: '1.55rem' }}
          src="/socials/facebook.svg"
          alt="facebook"
        />
      </a>
      <a className="" href="/">
        <img
          style={{ width: '1.55rem' }}
          src="/socials/youtube.svg"
          alt="youtube"
        />
      </a>
    </div>
    <p className="text-center text-darkGrey text-sm font-medium mt-6">
      VideoWork 2020. All Rights Reserved.
    </p>
  </div>
)

export default Index
