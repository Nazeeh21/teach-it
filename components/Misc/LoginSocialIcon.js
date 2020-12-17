import React from 'react'
import { useRouter } from 'next/router'

const LoginSocialIcon = ({ name, isSvg = false }) => {
  const router = useRouter()

  return (
    <div className="border-2 border-darkGrey rounded-full w-16 pl-4 pr-4 p-3 cursor-pointer">
      <img
        // onClick={() => router.push('/otp')}
        className="w-full"
        src={`socials/${name}.${isSvg ? 'svg' : 'png'}`}
        alt={`Login using ${name}`}
      />
    </div>
  )
}

export default LoginSocialIcon
