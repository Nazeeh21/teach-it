import React from 'react'
import LeftNavItem from './LeftNavItem'

const basePath = 'nav_icons/'

export default () => (
    <React.Fragment>
      <LeftNavItem icon={`${basePath}home.svg`} label='Home' />
      <LeftNavItem icon={`${basePath}categories.svg`} label='Categories' />
      <LeftNavItem icon={`${basePath}messages.svg`} label='Messages' />
      <LeftNavItem icon={`${basePath}services.svg`} label='Services' />
      <LeftNavItem icon={`${basePath}payments.svg`} label='Payments' />
      <LeftNavItem icon={`${basePath}support.svg`} label='Support' />
      <LeftNavItem icon={`${basePath}settings.svg`} label='Settings' />
    </React.Fragment>
)