import StarsRating from 'stars-rating'
import React from 'react'
 
const ratingChanged = (newRating) => {
  console.log(newRating)
}

const Rating = ({size = 25}) => (
  <StarsRating className=''
      count={5}
      onChange={ratingChanged}
      size={size}
      color1={'#f4ebc1'}
      color2={'#ffd700'}
      onChange={() => {}} />
)

export default Rating