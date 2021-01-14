import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { sendInvite, sendReview } from '../../services/sendInvite'
import { Label } from '../../views/Settings/Profile/Util'
import BackDrop from '../Backdrop'
import { SecondaryButton } from '../Buttons/Index'
import Input from '../Inputs/HighlightInput'
import Rating from '../Rating/Rating'

const ReviewForm = ({
  show,
  backdropClickHandler,
  buttonClicked,
  servicePk,
}) => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

  const InviteClickHandler = () => {
    sendReview(servicePk, rating, comment, token, currentProfileId)
      .then((res) => {
        console.log(res)
        buttonClicked()
      })
      .catch((e) => console.log(e))
  }

  return (
    <React.Fragment>
      <BackDrop show={show} clicked={backdropClickHandler} />
      <div
        style={{
          zIndex: '100',
          // marginTop: '10rem',
          // marginRight: '25rem',
          top: '10%',
          right: '25%',
          borderBottomLeftRadius: '1rem',
          borderTopLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
          borderTopRightRadius: '1rem',
          opacity: show ? '1' : '0',
        }}
        className="absolute bg-white w-8/12 md:w-5/12 lg:w-3/12 xl:w-3/12 h-auto pt-4 pl-6 pr-2 pb-4"
      >
        <Label>Rating</Label>
        {/* <Input
          value={rating}
          placeholder=""
          changeHandler={(e) => setRating(e)}
        /> */}
        <Rating size="25" value={rating} changeHandler={setRating} />
        <Label>Comment</Label>
        <Input
          // type="number"
          value={comment}
          placeholder=""
          changeHandler={(e) => {
            setComment(e)
          }}
        />
        <div className="w-10/12 md:w-10/12 lg:w-7/12 mt-4 m-auto">
          <SecondaryButton
            label="Confirm Review"
            clickHandler={InviteClickHandler}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ReviewForm
