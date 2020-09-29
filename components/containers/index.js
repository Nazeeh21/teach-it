import React from 'react'
import { dropShadow } from '../../assets/constants'

export const ContainerWithShadow = ({ children, width }) => (
  <div
    style={{...dropShadow, borderRadius: '4px'}}
    className={`bg-white p-2 m-4 w-${width}`}
  >
    {children}
  </div>
)

export const ContainerWithOutline = ({ children, width }) => (
  <div
    style={{
      border: '1px solid #D4D4D4',
    }}
    className={`bg-white p-2 m-4 w-${width}`}
  >
    {children}
  </div>
)

export const HighlightedContainer = ({ children, width }) => (
  <div
    style={{ borderRadius: '4px' }}
    className={`bg-highlight p-2 m-4 w-${width}`}
  >
    {children}
  </div>
)
