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
    console.log('userId', userId, roomId)
    const token = RtcTokenBuilder.buildTokenWithUid(
      APP_ID,
      APP_CERTIFICATE,
      roomId,
      userId,
      RtcRole.PUBLISHER,
      privilegeExpiredTs
    )

    console.log('Token With Integer Number ' + userId + ' = ' + token)

    return token
  } catch (error) {
    console.log('getDynamicToken', error)
    return null
  }
}
