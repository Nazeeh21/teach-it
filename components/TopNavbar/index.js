import React from 'react'
import NavSwitch from '../NavSwitch'

const Index = ({}) => {
  return (
    <div className="p-2 w-full bg-white flex flex-row items-center justify-center">
      <h1 className="text-xl font-bold w-2/12">Videowork</h1>
      <div className="w-2/12">
        <NavSwitch
          color1="expert"
          color2="learner"
          label1="expert"
          label2="learner"
        />
      </div>
    </div>
  )
}

export default Index
