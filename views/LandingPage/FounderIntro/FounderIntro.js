import React from 'react'

const text =
  'Videowork is the top ranked interactive learning platform from subject experts.'

const FounderIntro = () => (
  <div className="flex flex-col md:flex-row md:pl-0 justify-center items-center xl:px-10 py-24">
    <div className="w-full flex flex-row md:flex-col md:w-5/12 xl:w-3/12 text-center p-5">
      <img
        className="w-4/12 md:w-6/12 xl:w-7/12 h-auto m-auto rounded-lg"
        src="/founder.png"
        alt="founder-img"
      />
      <div className="m-auto">
        <p className="text-xl pt-5 text-darkGrey lg:text-2xl font-medium">
          Andesh Bhatti
        </p>
        <p className="text-lg text-darkGrey md:text-xl lg:text-2xl ">
          Founder, Videowork
        </p>
      </div>
    </div>
    <div className="w-full pl-8 md:pl-0 md:w-6/12">
      <p className=" text-5xl text-secondary">"</p>
      <p className="text-xl md:2xl xl:text-3xl font-medium">{text}</p>
    </div>
  </div>
)

export default FounderIntro
