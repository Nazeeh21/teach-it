import React from 'react'
import { useState } from 'react'
import { sendInvite } from '../../services/sendInvite'
import { Label } from '../../views/Settings/Profile/Util'
import BackDrop from '../Backdrop'
import { SecondaryButton } from '../Buttons/Index'
import Input from '../Inputs/HighlightInput'

const InviteForm = ({ show, backdropClickHandler, inviteClicked }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  const InviteClickHandler = () => {
    sendInvite(name, email, mobile)
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
    inviteClicked()
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
        <Label>Name</Label>
        <Input value={name} placeholder="" changeHandler={(e) => setName(e)} />
        <div>Enter email or Mobile</div>
        <Label>Email</Label>
        <Input
          value={email}
          placeholder=""
          changeHandler={(e) => setEmail(e)}
        />
        <Label>Mobile No</Label>
        <Input
          value={mobile}
          placeholder=""
          changeHandler={(e) => setMobile(e)}
        />
        <div className="w-10/12 lg:w-6/12 mt-4">
          <SecondaryButton
            label="Send Invite"
            clickHandler={InviteClickHandler}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default InviteForm
