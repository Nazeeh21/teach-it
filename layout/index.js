import React from 'react'

const FooterItem = ({ label }) => (
  <a href='/' className='cursor-pointer text-secondary text-sm'>
    {label}
  </a>
)

export const ThreeCols = ({ children, side }) => {
  if (side === 'center') {
    return (
      <div className={'w-3/12 flex flex-col pt-4 pl-4 pr-4 mb-6'}>
        {children}
      </div>
    )
  }

  return (
    <div
      className={
        'w-3/12 flex flex-col pt-4' +
        (side === 'left' ? ' pl-16 pr-2' : ' pl-2 pr-16')
      }
    >
      {children}
      {side === 'left' && (
        <React.Fragment>
          <div className='grid grid-flow-rol grid-cols-3 mt-6 gap-2'>
            <FooterItem label='Privacy Policy' />
            <FooterItem label='Terms of use' />
            <FooterItem label='Sitemap' />
          </div>
          <p className='text-darkGrey text-sm mt-2'>All copyrights reserved.</p>
        </React.Fragment>
      )}
    </div>
  )
}

export const DoubleSection = ({ children }) => {
  return (
    <div className='w-9/12 flex flex-col pt-4 pl-4 pr-4 mb-6'>{children}</div>
  )
}

export const CenterSection = ({ children, alternate = false }) => {
  if (alternate) {
    return (
      <div className='w-6/12 flex flex-col pt-4 pl-2 pr-16 mb-6'>
        {children}
      </div>
    )
  }

  return (
    <div className='w-6/12 flex flex-col pt-4 pl-4 pr-4 mb-6'>{children}</div>
  )
}
