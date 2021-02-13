import React from 'react'

const Card = ({ src, alt, heading, description, features }) => (
  <div className="w-full">
    <div className="m-6 lg:my-8 lg:mx-6 xl:x-4">
      <img className="mt-5 mb-5 w-12 lg:w-auto" alt={alt} src={src} />
      <p className={`text-${heading.color} font-bold text-5xl`}>
        {heading.text}
      </p>
      <div
        style={{ color: '#8A8EA0' }}
        className="mt-3 h-auto md:h-56 opacity-75 mb-8 lg:mb-3 lg:h-64 text-darkGrey text-lg font-medium"
      >
        {description}
      </div>
      <div className="bg-lightGrey m-auto w-full h-1" />
      <div className="mt-8 lg:mt-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div
              style={{ backgroundColor: 'lightGrey' }}
              className="lg:m-2 w-5 h-5 rounded-full flex"
            >
              <div
                style={{ backgroundColor: `${feature.color}` }}
                className="m-auto self-center w-3 h-3 rounded-full"
              />
            </div>
            <div className="text-darkGrey text-lg ml-4 md:ml-0 lg:ml-2 my-2">
              {feature.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Card
