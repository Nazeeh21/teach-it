import React from 'react'
import { PrimaryButton } from '../../../components/Buttons/Index'

const RightSideCard = () => {
  return (
    <div className="bg-white rounded-lg pl-4 pr-4 pt-4 pb-4">
      <p>Total earnings</p>
      <p className="text-3xl font-semibold mb-4">₹ 24.5k</p>
      <PrimaryButton label="Withdraw" />
    </div>
  )
}

export default RightSideCard
