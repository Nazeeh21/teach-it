import React from 'react'
import classes from './NavigationItem.module.css'

import { useRouter } from 'next/router'

const NavigationItem = ({ children, link, exact }) => {
  const router = useRouter()
  return (
    <li className={classes.NavigationItem}>
      <div onClick={() => router.push(link)} activeClassName={classes.active}>
        {children}
      </div>
    </li>
  )
}

export default NavigationItem
