import { SAVEDATA } from '../actionTypes'
import api from '../../api'

export const continueHandler = (formData) => {
  return (dispatch) => {
    console.log(formData)
    // dispatch(saveData(formData[0]))
    formData.map(async (data) => {
      try {
        // const res = await api.put(
        //   '/user/',
        //   { ...data, primary_type: 'seeker' },
        //   {
        //     headers: {
        //       Authorization: `Token ${localStorage.getItem('token')}`,
        //     },
        //   }
        // )
        const res = await api.post(
          '/user/profile/',
          {
            ...data,
            primary_type: 'seeker',
          },
          {
            headers: {
              Authorization: `Token ${localStorage.getItem('token')}`,
              'X-Profile-ID': localStorage.getItem('currentProfile'),
            },
          }
        )

        console.log(res)
      } catch (error) {
        console.log(error)
      }
      dispatch(saveData(data))
    })
  }
}

const saveData = (data) => {
  console.log('[SAVEDATA]', data)
  return {
    type: SAVEDATA,
    formData: data,
  }
}
// dispatch(saveData(data))
