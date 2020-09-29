import React from 'react'

export const SubHeading = ({ children, color, weight, alignment }) => <p className={`text-${color} font-${weight} text-subheading align-${alignment}`}>{children}</p>

export const InnerTitle = ({ children, color, weight, alignment }) => <p className={`text-${color} font-${weight} text-innerTitle align-${alignment}`}>{children}</p>

export const GeneralCardTitle = ({ children, color, weight, alignment }) => <p className={`text-${color} font-${weight} text-generalCardTitle align-${alignment}`}>{children}</p>

export const ServiceCardTitle = ({ children, color, weight, alignment }) => <p className={`text-${color} font-${weight} text-serviceCardTitle align-${alignment}`}>{children}</p>

export const List = ({ children, color, weight, alignment }) => <p className={`text-${color} font-${weight} text-list align-${alignment}`}>{children}</p>

export const ServiceCardDescription = ({ children, color, weight, alignment }) => <p className={`text-${color} font-${weight} text-serviceCardDescription align-${alignment}`}>{children}</p>

export const TextBoxValue = ({ children, color, weight, alignment }) => <p className={`text-${color} font-${weight} text-textBoxValue align-${alignment}`}>{children}</p>

export const TextBoxEmpty = ({ children, color, weight, alignment }) => <p className={`text-${color} font-${weight} text-textBoxEmpty align-${alignment}`}>{children}</p>

export const TextBoxTitle = ({ children, color, weight, alignment }) => <p className={`text-${color} font-${weight} text-textBoxTitle align-${alignment}`}>{children}</p>