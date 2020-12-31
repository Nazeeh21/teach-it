import {
  RtcTokenBuilder,
  RtmTokenBuilder,
  RtcRole,
  RtmRole,
} from 'agora-access-token'

const APP_ID = 'a79d3d6b148340be8c8375ea556f824c'
const APP_CERTIFICATE = '0b129377515e43889543cec7fec454ff'
const expirationTimeInSeconds = 3600

const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

export const getDynamicToken = async (roomId, userId) => {
  try {
    const token = RtcTokenBuilder.buildTokenWithUid(
      APP_ID,
      APP_CERTIFICATE,
      roomId,
      userId,
      RtcRole.PUBLISHER,
      privilegeExpiredTs
    )

    return token
  } catch (error) {
    console.log('getDynamicToken', error)
    return null
  }
}
